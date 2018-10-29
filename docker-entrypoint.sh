#----------------------------------------------------------
# Shell script to start the application by calling Honcho.
#----------------------------------------------------------

# migrations
python manage.py makemigrations
python manage.py migrate

# fixtures loading
python manage.py loaddata fixtures.json

# executes Procfile
honcho start