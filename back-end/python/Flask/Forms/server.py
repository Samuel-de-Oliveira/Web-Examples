import secrets
import sqlite3
from flask import Flask, url_for, render_template, Config, request, redirect

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

Existents_colors: list = [
    'Green',
    'Yellow',
    'Blue',
    'Gray',
    'Black',
    'Red',
    'Purple',
]


####### TOOLS #######
def get_users() -> list:
    db_cursor.execute('SELECT username FROM users;')
    db_usernames: list = db_cursor.fetchall()
    users: list = []
    for db_username in db_usernames:
        users.append(db_username[0])

    return users


#####################

####### PATHS #######
# Root path
@app.route('/', methods=['GET', 'POST'])
def index() -> str:
    return redirect(url_for('register'))


# Login path
@app.route('/register', methods=['GET', 'POST'])
def register() -> str:
    if request.method == 'POST':
        username: str = request.form['username']
        password: str = request.form['password']
        print(f'This data will be registered: {username} and {password}')

        if username and password:
            users: list = get_users()

            print(users)
            if username in users:
                return f'The username {username} Alredy exists!'
            else:
                db_cursor.execute(
                    'INSERT INTO users (username, password) VALUES (?, ?);',
                    [username, password],
                )
                server_db.commit()

        else:
            print('There is no login...')

        return redirect(url_for('register'))

    else:
        return render_template(
            'index.hbs',
            style_path='static/style.css',
            script_path='static/app.js',
            page_title='Sign in Page - Popular',
        )


# Authentication method
@app.route('/login', methods=['GET', 'POST'])
def authentication() -> str:
    if request.method == 'POST':
        username: str = request.args.get('username').lower()
        password: str = request.args.get('password').lower()

        if username and password:
            users: list = get_users()

            if username in users:
                return f'The user {username} Alredy exists!'
            else:
                db_cursor.execute(
                    'INSERT INTO users (username, password) VALUES (?, ?);',
                    [username, password],
                )
                server_db.commit()

        else:
            print('There is no login...')

    return redirect(url_for('register'))


# Redirect
@app.route('/u', methods=['GET'])
def user() -> str:
    return redirect(url_for('register'))


# Users
@app.route('/u/<usr>', methods=['GET', 'POST'])
def users(usr: str) -> str:
    users: list = get_users()

    if usr.lower() in users:
        return render_template('user.hbs', username=usr.lower())
    else:
        return 'This user does not exists.'


#####################

###### Real Form ######
@app.route('/real-form', methods=['GET', 'POST'])
def real_form() -> str:
    # Show the informations got in form
    if request.method == 'POST':
        username: str = request.form['name'].capitalize()
        color: str = request.form['color'].capitalize()

        text_message: str = f"Your name is {username} and your favorite color is {color}\n"

        if color in Existents_colors:
            text_message += "Your color is in our database!"
        else:
            text_message += "Your color isn't in our database! :("

        return text_message

    # Show form
    else:
        return render_template('form.hbs')
#######################


# Run server
if __name__ == '__main__':
    # Config
    DEBUG: bool = True
    PORT: int = 3000
    HOST: str = '127.0.0.1'

    # Run
    app.run(debug=DEBUG, port=PORT, host=HOST)
