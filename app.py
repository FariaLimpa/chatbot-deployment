from flask import Flask, render_template, request, jsonify
from chat import get_response

# Initialize Flask application
app = Flask(__name__)


# Route for the index page (GET request)
@app.get("/")
def index_get():
    # Render the base.html template
    return render_template("base.html")


# Route for showing products (GET request)
@app.get("/product")
def show_products():
    # Render the product.html template
    return render_template("product.html")


# Route for accessing the chatbot page (GET request)
@app.get("/chatbot")
def chatbot():
    # Render the chatbot.html template
    return render_template("chatbot.html")


# Route for predicting responses from the chatbot (POST request)
@app.post("/predict")
def predict():
    # Get the message from the JSON request
    text = request.get_json()["message"]
    # Get the response from the chatbot using the provided message
    response = get_response(text)
    # Return the response as JSON
    return jsonify({"answer": response})


# Start the Flask application
if __name__ == "__main__":
    # Run the application in debug mode
    app.run(debug=True)
