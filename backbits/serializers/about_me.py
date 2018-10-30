"""
Module with the AboutMe serializer.
"""
from rest_framework import serializers

from ..models.about_me import AboutMe


class AboutMeSerializer(serializers.ModelSerializer):
    """
    ModelSerializer for the AboutMe model.
    """

    image_url = serializers.SerializerMethodField()
    resume_url = serializers.SerializerMethodField()

    class Meta:
        model = AboutMe
        fields = (
            "first_name",
            "last_name",
            "city",
            "age",
            "marital_status",
            "languages",
            "description",
            "image_url",
            "resume_url",
        )

    def get_image_url(self, image):
        """ Builds an absolute URL of the image. """
        # gets the request context
        request = self.context.get("request")

        # gets the filesystem uri
        filesystem_image_url = image.image.name

        # builds the full image url by removing unnecessary os folders
        full_image_url = request.build_absolute_uri(filesystem_image_url).replace("/api/backbits/", "/")

        return full_image_url

    def get_resume_url(self, resume):
        """ Builds an absolute URL of the image. """
        # gets the request context
        request = self.context.get("request")

        # gets the filesystem uri
        filesystem_resume_url = resume.resume.name

        # builds the full image url by removing unnecessary os folders
        full_resume_url = request.build_absolute_uri(filesystem_resume_url).replace("/api/backbits/", "/")

        return full_resume_url
