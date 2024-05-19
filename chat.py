import random
import json

import torch

from model import NeuralNet
from nltk_utils import bag_of_words, tokenize

# Check if a GPU is available and use it, otherwise use the CPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load intents JSON file which contains predefined intents and responses
with open("intents.json", "r") as json_data:
    intents = json.load(json_data)

# Load the trained model data from 'data.pth'
FILE = "data.pth"
data = torch.load(FILE)

# Extract model parameters and other relevant information from the loaded data
input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data["all_words"]
tags = data["tags"]
model_state = data["model_state"]

# Create an instance of the neural network with the same architecture as the trained model
model = NeuralNet(input_size, hidden_size, output_size).to(device)
# Load the saved model weights
model.load_state_dict(model_state)
# Set the model to evaluation mode (disables dropout and batch normalization layers)
model.eval()

# Define the bot name
bot_name = "PlantChat"


# Function to get a response from the chatbot
def get_response(msg):
    # Tokenize the input message
    sentence = tokenize(msg)
    # Convert the tokenized sentence into a bag-of-words representation
    X = bag_of_words(sentence, all_words)
    # Reshape the numpy array to a 2D tensor and move it to the configured device
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    # Get the output from the model
    output = model(X)
    # Determine the predicted tag (class) with the highest score
    _, predicted = torch.max(output, dim=1)

    # Get the corresponding tag name
    tag = tags[predicted.item()]

    # Use softmax to get the probabilities of each class
    probs = torch.softmax(output, dim=1)
    # Get the probability of the predicted class
    prob = probs[0][predicted.item()]

    # If the highest probability is greater than 0.75, find the corresponding response
    if prob.item() > 0.75:
        for intent in intents["intents"]:
            if tag == intent["tag"]:
                # Return a random response from the matched intent
                return random.choice(intent["responses"])

    # If the probability is not above the threshold, return a default message
    return "I do not understand..."


# Main block to start the chat interface
if __name__ == "__main__":
    print("Let's chat! (type 'quit' to exit)")
    while True:
        # Prompt the user for input
        sentence = input("You: ")
        # Check for exit command
        if sentence == "quit":
            break

        # Get response from the bot
        resp = get_response(sentence)
        # Print the bot's response
        print(resp)
