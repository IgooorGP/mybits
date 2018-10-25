"""
Module with the project serializer.
"""

from rest_framework import serializers

from ..models.project import Project


class ProjectSerializer(serializers.ModelSerializer):
    """
    ModelSerializer for the Project model.
    """

    class Meta:
        model = Project
        fields = ("title", "website_link", "description")
