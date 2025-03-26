from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name="index"),
  path('json/', views.get_tasks, name="json"),
]
