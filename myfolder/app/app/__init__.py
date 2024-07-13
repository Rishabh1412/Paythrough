from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///databaseuser.db'
    db.init_app(app)

    from .auth import authen as auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')

    @app.route('/')
    def home_page():
        return render_template("home.html")

    @app.route('/about')
    def about():
        return render_template('about.html')

    @app.route('/dashboard')
    def dashboard():
        return render_template('dashboard.html')

    return app
