from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "AI API Running!"

if __name__ == '__main__':
    app.run(port=5001)