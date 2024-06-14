from django import forms
from django.shortcuts import render

tasks = ["foo", "bar", "baz", "boo", "mun"]

class NewTaskForm(forms.Form):
    task = forms.CharField(label="New task")

def index(request):
    return render(request, "tasks/index.html", {
                'tasks': tasks
            })


def add(request):
    return render(request, "tasks/add.html", {
                'form': NewTaskForm()
            })
