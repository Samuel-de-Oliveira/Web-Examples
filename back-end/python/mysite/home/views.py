from django.shortcuts import render, HttpResponse
from random import randint

colors: list = [
    'blue',
    'gray',
    'red',
    'yellow',
    'green',
]

Status: dict = {
        'visits': 0,
}

# Index
def index(req) -> render:
    Status['visits'] += 1
    
    return render(
        req, 'index.html', {
            'visits': Status['visits']
        }
    )

# Visits
def visits(req) -> HttpResponse:
    return HttpResponse(f'Visits: {Status['visits']}')

# Random
def random(req) -> render:
    return render(
        req, 'random/index.html', {
            'color': colors[randint(0, len(colors) - 1)].capitalize()
        }
    )
