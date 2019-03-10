"""
Module with the project serializer.
"""

from rest_framework import serializers

from ..models.project import Project


class ProjectSerializer(serializers.ModelSerializer):
    """
    ModelSerializer for the Project model.
    """

    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ("title", "website_link", "description", "image_url")

    def get_image_url(self, project: Project) -> str:
        """ Builds the URL of the project image. """
        return project.image.url
