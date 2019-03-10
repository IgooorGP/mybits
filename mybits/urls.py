"""
This module defines the URL patterns for the application.
"""
import os

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path(os.environ.get("DJANGO_ADMIN_URL"), admin.site.urls),
    path("", include("backbits.urls")),  # includes the web app urls with prefix
]
