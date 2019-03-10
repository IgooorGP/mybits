"""
Module with integration tests for the RESTful routes related to the Project model.
"""
import json

import pytest
from django.core.files.uploadedfile import SimpleUploadedFile
from django.db import transaction
from django.db.models import QuerySet
from rest_framework.test import APIClient

from backbits.models.project import Project


@pytest.fixture
def api_client(scope="module"):
    return APIClient()


def seed_db():
    with open("./backbits/tests/resources/image.png", "rb") as img:
        fake_project_img = SimpleUploadedFile(
            "fake_image", content=img.read(), content_type="image/png"
        )

        fake_project = {
            "title": "fake_title",
            "website_link": "fake_link",
            "description": "a fake project",
            "image": fake_project_img,
        }

        Project.objects.create(**fake_project)


@pytest.mark.django_db(transaction=True)
def test_drf_project_get_should_return_project(api_client: APIClient):
    """
    Integration: GET to projects route should return a project when there's
    one in the database.
    """
    projects: QuerySet[Project] = Project.objects.all()
    assert projects.count() == 0

    # inserts one project
    seed_db()
    assert projects.count() == 1

    # API get assertion
    response = api_client.get(path="/api/projects")
    response_content = json.loads(response.content)
    expected_projects_content = [
        {
            "title": "fake_title",
            "website_link": "fake_link",
            "description": "a fake project",
            "image_url": "/media/backbits/fake_image",
        }
    ]

    assert response.status_code == 200
    assert response_content == expected_projects_content
