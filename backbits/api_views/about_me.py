"""
Module with the API view for the Project model.
"""

from rest_framework.response import Response
from rest_framework.views import APIView

from ..models.about_me import AboutMe
from ..serializers.about_me import AboutMeSerializer


class AboutMeAPIView(APIView):
    """
    API view for the AboutMe model.
    """

    # for HTTP get requests
    def get(self, request, format=None):
        """
        Returns all the Project objects upon an HTTP GET.
        """
        # uses Project model manager to perform an all query
        about_me = AboutMe.objects.all()

        # serializes the objects
        serialized_about_me = AboutMeSerializer(about_me, many=True, context={"request": request})

        return Response(serialized_about_me.data)
