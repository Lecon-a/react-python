from flask import Flask
from database import db

app = Flask(__name__)

@app.route('/')
def hello_world():
    print("Database: ", db)
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)