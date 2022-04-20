from django.template import loader
from django.shortcuts import render
def index(request):
    context = {"segment": "index"}

    return render(request, "index.html", context)