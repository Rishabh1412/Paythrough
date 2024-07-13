from flask import Blueprint,render_template

authen = Blueprint('authen',__name__)

@authen.route('/login')
def login_page():
    return render_template('login.html')

@authen.route('/signup')
def login_page():
    return render_template('signup.html')
