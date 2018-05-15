"""
Views for the web app.
"""
from web import views
from django.contrib import admin
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    url(r'^$', views.index, name='index')
] 

if settings.DEBUG:
    # adds /static/ for all files in web/static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += staticfiles_urlpatterns()