"""
Module with the project model.
"""
from django.db import models


class AboutMe(models.Model):
    """
    Model for the about me info.
    """

    # projects display data
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255, null=False, blank=False)
    city = models.CharField(max_length=255, null=False, blank=False)
    age = models.SmallIntegerField(null=False, blank=False)
    marital_status = models.CharField(max_length=100, null=False, blank=False)
    languages = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    image = models.FileField(upload_to="backbits/static/backbits", null=False, blank=False)
    resume = models.FileField(upload_to="backbits/static/backbits", null=False, blank=False)
