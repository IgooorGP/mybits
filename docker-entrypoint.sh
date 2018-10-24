#----------------------------------------------------------
# Shell script to start the application by calling Honcho.
#----------------------------------------------------------

# migrate
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata fixtures.json

# executes Procfile
honcho start