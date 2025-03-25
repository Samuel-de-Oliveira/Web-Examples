from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('visits/', views.visits, name="visits"),
    path('random/', views.random, name="random"),
] + static(settings.STATIC_URL)
