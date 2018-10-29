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
        image_url = image.image.name

        # removes api domain (to be removed later)
        full_image_url = request.build_absolute_uri(image_url)

        return full_image_url.replace("/api/", "/")

    def get_resume_url(self, resume):
        """ Builds an absolute URL of the resume. """
        # gets the request context
        request = self.context.get("request")
        resume_url = resume.resume.name

        # removes api domain (to be removed later)
        full_resume_url = request.build_absolute_uri(resume_url)

        return full_resume_url.replace("/api/", "/")
