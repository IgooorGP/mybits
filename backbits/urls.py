"""
Views for the web app.
"""
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from backbits import views

from .api_views.about_me import AboutMeAPIView
from .api_views.projects import ProjectListAPIView
from .api_views.skills import SkillsListAPIView

urlpatterns = [
    # non-api routes
    url(r"^$", views.index, name="index"),
    # django restframework API routes
    url("api/projects", ProjectListAPIView.as_view()),
    url("api/skills", SkillsListAPIView.as_view()),
    url("api/about_me", AboutMeAPIView.as_view()),
]

if settings.DEBUG:
    # adds /static/ for all files in web/static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    urlpatterns += staticfiles_urlpatterns()
