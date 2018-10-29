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

    def get_image_url(self, image):
        """ Builds an absolute URL of the image. """
        # gets the request context
        request = self.context.get("request")

        # gets the filesystem uri
        filesystem_image_url = image.image.name

        # builds the full image url by removing unnecessary os folders
        full_image_url = request.build_absolute_uri(filesystem_image_url).replace("/api/backbits/", "/")

        return full_image_url
