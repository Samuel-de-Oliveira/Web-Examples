from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from random import randint

def index(req) -> HttpResponse:
  return HttpResponse(f'{"Hello " * randint(0, 5)}')

def get_tasks(req) -> JsonResponse:
  return JsonResponse({
    "Number": randint(0, 5),
  })
