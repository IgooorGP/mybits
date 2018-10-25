"""
Module with the API view for the Project model.
"""

from rest_framework.response import Response
from rest_framework.views import APIView

from ..models.project import Project
from ..serializers.project import ProjectSerializer


class ProjectList(APIView):
    """
    API view for the projects model.
    """

    # for HTTP get requests
    def get(self, request, format=None):
        """
        Returns all the Project objects upon an HTTP GET.
        """
        # uses Project model manager to perform an all query
        projects = Project.objects.all()

        # serializes the objects
        serialized_projects = ProjectSerializer(projects, many=True)

        return Response(serialized_projects.data)
