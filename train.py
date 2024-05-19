import numpy as np
import random
import json

import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

from nltk_utils import bag_of_words, tokenize, stem
from model import NeuralNet

# Load intents JSON file
with open("intents.json", "r") as f:
    intents = json.load(f)

# Initialize lists to hold words, tags, and patterns
all_words = []
tags = []
xy = []

# Loop through each intent in the intents file 
for intent in intents["intents"]:
    tag = intent["tag"]
    # Add tag to the list of tags
    tags.append(tag)
    for pattern in intent["patterns"]:
        # Tokenize each word in the sentence
        w = tokenize(pattern)
        # Add tokenized words to our words list
        all_words.extend(w)
        # Add pattern and tag to the xy list
        xy.append((w, tag))

# Stem and lower each word, remove ignored words
ignore_words = ["?", ".", "!"]
all_words = [stem(w) for w in all_words if w not in ignore_words]
# Remove duplicates and sort the words and tags
all_words = sorted(set(all_words))
tags = sorted(set(tags))

# Print the number of patterns, tags, and unique stemmed words
print(len(xy), "patterns")
print(len(tags), "tags:", tags)
print(len(all_words), "unique stemmed words:", all_words)

# Create training data
X_train = []
y_train = []
for pattern_sentence, tag in xy:
    # Convert pattern_sentence to a bag of words
    bag = bag_of_words(pattern_sentence, all_words)
    X_train.append(bag)
    # CrossEntropyLoss requires class labels, not one-hot encoding
    label = tags.index(tag)
    y_train.append(label)

# Convert training data to numpy arrays
X_train = np.array(X_train)
y_train = np.array(y_train)

# Hyperparameters
num_epochs = 1000 # number of runs through the entire dataset
batch_size = 8
learning_rate = 0.001
input_size = len(X_train[0])  # Size of input layer
hidden_size = 8  # Size of hidden layer
output_size = len(tags)  # Size of output layer
print(input_size, output_size)


# Custom Dataset class for loading data
class ChatDataset(Dataset):

    def __init__(self):
        self.n_samples = len(X_train)
        self.x_data = X_train
        self.y_data = y_train

    # Support indexing such that dataset[i] can be used to get i-th sample
    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]

    # We can call len(dataset) to return the size
    def __len__(self):
        return self.n_samples


# Create dataset and dataloader
dataset = ChatDataset()
train_loader = DataLoader(
    dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=0
)

# Check for GPU availability
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Initialize the model, loss function, and optimizer
model = NeuralNet(input_size, hidden_size, output_size).to(device)
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

# Train the model
for epoch in range(num_epochs):
    for words, labels in train_loader:
        # Move tensors to the configured device (GPU/CPU)
        words = words.to(device)
        labels = labels.to(dtype=torch.long).to(device)

        # Forward pass: Compute predicted y by passing x to the model
        outputs = model(words)
        # Compute the loss
        loss = criterion(outputs, labels)
        
        # Zero the gradients before backward pass
        optimizer.zero_grad()
        # Backward pass: Compute gradient of the loss with respect to model parameters
        loss.backward()
        # Perform a single optimization step (parameter update)
        optimizer.step()

    # Print loss every 100 epochs
    if (epoch + 1) % 100 == 0:
        print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")

# Print the final loss
print(f"final loss: {loss.item():.4f}")

# Save the model and related data
data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "hidden_size": hidden_size,
    "output_size": output_size,
    "all_words": all_words,
    "tags": tags,
}

# Save the trained model to a file
FILE = "data.pth"
torch.save(data, FILE)

print(f"training complete. file saved to {FILE}")
