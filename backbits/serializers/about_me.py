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

    def get_image_url(self, about_me: AboutMe) -> str:
        """ Builds the URL of the image. """

        return about_me.image.url

    def get_resume_url(self, about_me: AboutMe) -> str:
        """ Builds the URL of the resume file. """

        return about_me.resume.url
