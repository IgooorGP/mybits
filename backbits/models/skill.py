"""
Module with the skill model.
"""
from django.db import models


class Skill(models.Model):
    """
    Model for a skill such as Python language.
    """

    title = models.CharField(max_length=255, null=False, blank=False)
    website_link = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField(max_length=500, null=False, blank=False)
