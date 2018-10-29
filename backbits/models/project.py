"""
Module with the project model.
"""
import os

from django.db import models

PROJECT_ROOT = os.path.realpath(os.path.dirname(__file__))


class Project(models.Model):
    """
    Model for a project such as a github project.
    """

    # projects display data
    title = models.CharField(max_length=255, null=False, blank=False)
    website_link = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(max_length=500, null=False, blank=False)
    image = models.FileField(upload_to="static/backbits", null=False, blank=False)
