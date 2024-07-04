import os
from flask import Flask, send_from_directory
from flask_cors import CORS
from config import create_db

app = Flask(__name__)
CORS(app)
db = create_db(app)

frontend_folder = os.path.join(os.getcwd(), "..", "client", "dist")

# serve the frontend
@app.route('/', defaults={'filename': ''})
@app.route('/<path:filename>')
def serve_frontend(filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(frontend_folder, filename)


# api routes
import routes

with app.app_context():
    db.create_all()

# if running directly using python app.py
if __name__ == '__main__':
    app.run(debug=True)