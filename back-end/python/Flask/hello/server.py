from flask import Flask, url_for, render_template, Config
from markupsafe import escape
from random import randint

backgrounds: list = [
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'gray',
]

DEBUG: bool = True

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def index() -> str:
    return render_template('index.hbs')


@app.route('/<username>')
def show_name(username: str) -> str:
    background_number: int = randint(0, len(backgrounds) - 1)
    print(backgrounds[background_number])

    return render_template(
        'hello.hbs',
        username=escape(username),
        background_name=backgrounds[background_number],
    )
