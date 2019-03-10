"""
Module with integration tests for the RESTful routes related to the AboutMe model.
"""
import json

import pytest
from django.core.files.uploadedfile import SimpleUploadedFile
from django.db.models import QuerySet
from rest_framework.test import APIClient

from backbits.models.about_me import AboutMe


@pytest.fixture
def api_client(scope="module"):
    return APIClient()


def seed_db():
    with open("./backbits/tests/resources/image.png", "rb") as img:
        fake_about_me_image = SimpleUploadedFile(
            "fake_about_me_image", content=img.read(), content_type="image/png"
        )

    with open("./backbits/tests/resources/sample.pdf", "rb") as img:
        fake_about_me_resume = SimpleUploadedFile(
            "fake_resume", content=img.read(), content_type="application/pdf"
        )

    fake_about_me = {
        "first_name": "fake_first_name",
        "last_name": "fake_last_name",
        "city": "city",
        "age": 27,
        "marital_status": "single",
        "languages": "languages",
        "description": "Some description goes here!",
        "image": fake_about_me_image,
        "resume": fake_about_me_resume,
    }

    AboutMe.objects.create(**fake_about_me)


@pytest.mark.django_db(transaction=True)
def test_drf_about_me_get_should_return_about_me(api_client: APIClient):
    """
    Integration: GET to about_me route should return an about_me when there's
    one in the database.
    """
    about_mes: QuerySet[AboutMe] = AboutMe.objects.all()
    assert about_mes.count() == 0

    # inserts one project
    seed_db()
    assert about_mes.count() == 1

    # API get assertion
    response = api_client.get(path="/api/about_me")
    response_content = json.loads(response.content)
    expected_about_me_content = [
        {
            "first_name": "fake_first_name",
            "last_name": "fake_last_name",
            "city": "city",
            "age": 27,
            "marital_status": "single",
            "languages": "languages",
            "description": "Some description goes here!",
            "image_url": "/media/backbits/fake_about_me_image",
            "resume_url": "/media/backbits/fake_resume",
        }
    ]

    assert response.status_code == 200
    assert response_content == expected_about_me_content
