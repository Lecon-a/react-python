from flask_sqlalchemy import SQLAlchemy

def create_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///friends.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    return SQLAlchemy(app)

if __name__ == "__main__":
    print("Creating database")