from django.shortcuts import render

tasks = ["foo", "bar", "baz"]

def index(request):
    return render(request, "tasks/index.html", {
            'tasks': tasks
        }
)
