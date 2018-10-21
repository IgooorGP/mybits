#-------------------------------------------------------------
# Procfile to run gunicorn process for the Django application.
#-------------------------------------------------------------

# starts gunicorn with the django application by adding mybits to the PYTHONPATH variable
# web: gunicorn --pythonpath mybits -b 0.0.0.0:$APP_PORT -t 3600 -w 1 mybits.wsgi:application

# starts daphne since mybits package is added to PYTHONPATH in the docker-entrypoint.sh
web: daphne -b 0.0.0.0 -p $APP_PORT mybits.asgi:application
