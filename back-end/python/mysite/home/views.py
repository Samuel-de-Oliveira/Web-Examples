from django.shortcuts import render, HttpResponse

Status: dict = {
        'visits': 0,
}

def index(req) -> HttpResponse:
    Status['visits'] += 1
    
    return render(req, 'index.html', {
        'visits': Status['visits']
    })
