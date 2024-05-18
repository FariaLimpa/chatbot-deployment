from flask import Flask, render_template, request, jsonify

from chat import get_response


app = Flask(__name__)


@app.get("/")
def index_get():
    return render_template("base.html")


@app.get("/product")
def products():
    return render_template("product.html")


@app.post("/predict")
def predict():
    text = request.get_json()["message"]
    response = get_response(text)
    return jsonify({"answer": response})


if __name__ == "__main__":
    app.run(debug=True)
