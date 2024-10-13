from django.shortcuts import render
from datetime import datetime

def index(request):
    return render(request, "newyear/index.html", {
            "nowdate": f"{datetime.now().day}/{datetime.now().month}/{datetime.now().year}",
            "newyear": datetime.now().month == 1
})
