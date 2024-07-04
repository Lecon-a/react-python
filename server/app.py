# Update this file for deployment

from flask import Flask
from flask_cors import CORS
from config import create_db

app = Flask(__name__)
CORS(app)
db = create_db(app)

import routes

with app.app_context():
    db.create_all()

# if running directly using python app.py
if __name__ == '__main__':
    app.run(debug=True)