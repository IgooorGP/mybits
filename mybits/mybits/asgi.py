"""
ASGI entrypoint. Configures Django and then exposes a callable
to be instantiated by Daphne on every request.
"""

import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mybits.settings")

django.setup()

application = get_default_application()
