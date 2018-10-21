from django.shortcuts import render


def index(request):
    return render(request, "backbits/index.html")

