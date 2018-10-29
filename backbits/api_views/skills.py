"""
Module with the API view for the Project model.
"""

from rest_framework.response import Response
from rest_framework.views import APIView

from ..models.skill import Skill
from ..serializers.skill import SkillSerializer


class SkillsListAPIView(APIView):
    """
    API view for the Skills model.
    """

    # for HTTP get requests
    def get(self, request, format=None):
        """
        Returns all the Project objects upon an HTTP GET.
        """
        # uses Project model manager to perform an all query
        skills = Skill.objects.all()

        # serializes the objects
        serialized_skills = SkillSerializer(skills, many=True, context={"request": request})

        return Response(serialized_skills.data)
