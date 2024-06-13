from django.shortcuts import render

tasks = ["foo", "bar", "baz", "boo", "mun"]

def index(request):
    return render(request, "tasks/index.html", {
                'tasks': tasks
            })


def add(request):
    return render(request, "tasks/add.html")
