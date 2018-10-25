"""
Views for the web app.
"""
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin

from backbits import views
from .api_views.projects import ProjectList

urlpatterns = [url(r"^$", views.index, name="index"), url("api/projects", ProjectList.as_view())]

if settings.DEBUG:
    # adds /static/ for all files in web/static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    urlpatterns += staticfiles_urlpatterns()
