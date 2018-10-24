"""
WSGI entrypoint. Configures Django and then exposes a callable
named application to be invoke by Gunicorn.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mybits.settings")

application = get_wsgi_application()
