"""
This module defines the URL patterns for the application.
"""
from django.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls')) # includes the web app urls with prefix
]
