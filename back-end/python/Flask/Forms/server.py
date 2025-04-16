from flask import Flask, url_for, render_template, Config, request, redirect
import sqlite3
from markupsafe import escape

app = Flask(__name__)
app.config.from_object(__name__)

server_db = sqlite3.connect('server.sqlite3', check_same_thread=False)
db_cursor = server_db.cursor()

# Create table database
db_cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    );
"""
)

# Config
DEBUG: bool = True
PORT: int = 3000
HOST: str = '127.0.0.2'


# Root path
@app.route('/')
def index() -> str:
    return redirect(url_for('register'))


# Login path
@app.route('/register')
def register() -> str:
    return render_template(
        'index.hbs',
        style_path='static/style.css',
        script_path='static/app.js',
        page_title='Sign in Page - Popular',
    )


# Authentication method
@app.route('/auth', methods=['GET', 'POST'])
def authentication() -> str:
    if request.method == 'POST':
        username: str = request.args.get('username').lower()
        password: str = request.args.get('password').lower()

        if username and password:
            db_cursor.execute('SELECT username FROM users;')
            db_usernames: list = db_cursor.fetchall()
            users: list = []
            for db_username in db_usernames:
                users.append(db_username[0])

            print(users)
            if username in users:
                return f'The user {username} Alredy exists!'
            else:
                db_cursor.execute(
                    'INSERT INTO users (username, password) VALUES (?, ?);',
                    [username, password],
                )
                server_db.commit()

        else:
            print('No login...')

    return redirect(url_for('register'))


# Redirect
@app.route('/u', methods=['GET'])
def user() -> str:
    return redirect(url_for('register'))


# Users
@app.route('/u/<usr>', methods=['GET'])
def users(usr) -> str:
    if usr:
        return f'Hello, {usr}!'
    else:
        return 'This user does not exists.'


if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT, host=HOST)
