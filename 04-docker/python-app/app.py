from flask import Flask
import os
import requests

PORT = os.environ.get("PORT", 9000)

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World from Python!</p>"

@app.route("/node")
def node_hello():
    res = requests.get("http://node-app:8001")
    return res.text

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT)