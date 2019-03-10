"""
Module with the skill model.
"""
from django.db import models


class Skill(models.Model):
    """
    Model for a skill such as Python language.
    """

    # skills display data
    title = models.CharField(max_length=255, null=False, blank=False)
    level = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(max_length=500, null=False, blank=False)
    image = models.FileField(upload_to="backbits", null=False, blank=False)
