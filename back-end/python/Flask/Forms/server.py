from flask import Flask, url_for, render_template, Config, request
import sqlite3
from markupsafe import escape

app = Flask(__name__)
app.config.from_object(__name__)

server_db = sqlite3.connect('server.sqlite3', check_same_thread=False)
db_cursor = server_db.cursor()

# Create table
db_cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    );
"""
)

DEBUG: bool = True
PORT: int = 3000
HOST: str = '127.0.0.2'


@app.route('/')
def index() -> str:
    return render_template(
        'index.hbs',
        style_path='static/style.css',
        script_path='static/app.js',
        page_title='Sign in Page - Popular',
    )


@app.route('/auth')
def authentication() -> str:
    username: str = request.args.get('username').lower()
    password: str = request.args.get('password').lower()

    db_cursor.execute("SELECT username FROM users;")
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

        return f'Your username is: {username}'


if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT, host=HOST)
