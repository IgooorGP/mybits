"""
Django settings for mybits project.
"""
import ast
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("DJANGO_SETTINGS_SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = ast.literal_eval(os.environ.get("DJANGO_SETTINGS_DEBUG"))

# The nginx proxy server will send the requests to gunicorn
# with the header: Host: "ipeternella.com"
ALLOWED_HOSTS = [os.environ.get("DJANGO_ALLOWED_HOST")]

# Application definition
INSTALLED_APPS = [
    "channels",
    "backbits",
    "rest_framework",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "mybits.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ]
        },
    }
]

WSGI_APPLICATION = "mybits.wsgi.application"
ASGI_APPLICATION = (
    "mybits.routing.application"
)  # routing for HTTP requests and Socket connections

# Database
DATABASES = {
    "default": {
        "ENGINE": os.environ.get("DJANGO_SETTINGS_DB_ENGINE"),
        "NAME": os.environ.get("DJANGO_SETTINGS_DB_NAME"),
        "USER": os.environ.get("DJANGO_SETTINGS_DB_USER"),
        "PASSWORD": os.environ.get("DJANGO_SETTINGS_DB_PASSWORD"),
        "HOST": os.environ.get("DJANGO_SETTINGS_DB_HOST"),
        "PORT": int(os.environ.get("DJANGO_SETTINGS_DB_PORT")),
    }
}


# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# Rest framework api responses as PURE jsons
REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": ("rest_framework.renderers.JSONRenderer",)
}


# Internationalization
LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = "/static/"

# File uploading
MEDIA_URL = "/media/"

# For production deploy
STATIC_ROOT = os.environ.get("DJANGO_SETTINGS_STATIC_ROOT")
MEDIA_ROOT = os.environ.get("DJANGO_SETTINGS_MEDIA_ROOT")
