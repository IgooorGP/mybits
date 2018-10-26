"""
Module with the Skill serializer.
"""
from rest_framework import serializers

from ..models.skill import Skill


class SkillSerializer(serializers.ModelSerializer):
    """
    ModelSerializer for the Skill model.
    """

    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Skill
        fields = ("display_title", "title", "website_link", "description", "image_url")

    def get_image_url(self, image):
        """ Builds an absolute URL of the image. """
        # gets the request context
        request = self.context.get("request")
        image_url = image.image.name

        # removes api domain (to be removed later)
        full_image_url = request.build_absolute_uri(image_url)

        return full_image_url.replace("/api/", "/")
