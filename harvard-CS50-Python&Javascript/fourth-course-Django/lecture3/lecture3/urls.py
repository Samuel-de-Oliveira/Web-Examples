from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('newyear/', include("newyear.urls")),
    path('hello/', include("hello.urls"))
]
