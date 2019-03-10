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
        fields = ("title", "level", "description", "image_url")

    def get_image_url(self, skill: Skill) -> str:
        """ Builds the URL of the skill image. """
        return skill.image.url
