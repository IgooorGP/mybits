#-------------------------------------------------------------
# Procfile to run gunicorn process for the Django application.
#-------------------------------------------------------------

# goes up one level and starts the gunicorn server
web: gunicorn --pythonpath mybits -b 0.0.0.0:5000 -t 3600 -w 1 mybits.wsgi:application