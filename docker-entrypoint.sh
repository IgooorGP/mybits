#----------------------------------------------------------
# Shell script to start the application by calling Honcho.
#----------------------------------------------------------

# migrations
python manage.py makemigrations
python manage.py migrate

# fixtures loading
python manage.py loaddata fixtures.json

# static collection
# python manage.py collectstatic

# executes Procfile
honcho start