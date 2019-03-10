"""
Module with integration tests for the RESTful routes related to the Skill model.
"""
import json

import pytest
from django.core.files.uploadedfile import SimpleUploadedFile
from django.db.models import QuerySet
from rest_framework.test import APIClient

from backbits.models.skill import Skill


@pytest.fixture
def api_client(scope="module"):
    return APIClient()


def seed_db():
    with open("./backbits/tests/resources/image.png", "rb") as img:
        fake_skill_image = SimpleUploadedFile(
            "fake_skill_image", content=img.read(), content_type="image/png"
        )

        fake_skill = {
            "title": "fake_title",
            "level": "fake_level",
            "description": "a fake skill",
            "image": fake_skill_image,
        }

        Skill.objects.create(**fake_skill)


@pytest.mark.django_db(transaction=True)
def test_drf_skill_get_should_return_skill(api_client: APIClient):
    """
    Integration: GET to skills route should return a skill when there's
    one in the database.
    """
    skills: QuerySet[Skill] = Skill.objects.all()
    assert skills.count() == 0

    # inserts one project
    seed_db()
    assert skills.count() == 1

    # API get assertion
    response = api_client.get(path="/api/skills")
    response_content = json.loads(response.content)
    expected_skills_content = [
        {
            "title": "fake_title",
            "level": "fake_level",
            "description": "a fake skill",
            "image_url": "/media/backbits/fake_skill_image",
        }
    ]

    assert response.status_code == 200
    assert response_content == expected_skills_content
