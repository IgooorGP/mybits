"""
Views for the web app.
"""
from web import views
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', views.index, name= 'index')
] + static(settings.STATIC_URL)
