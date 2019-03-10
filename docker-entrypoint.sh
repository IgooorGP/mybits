#----------------------------------------------------------
# Shell script to start the application by calling Honcho.
#----------------------------------------------------------

# migrations
python manage.py makemigrations
python manage.py migrate

# fixtures loading
python manage.py loaddata ./backbits/fixtures/admin_fixture.json
python manage.py loaddata ./backbits/fixtures/about_me_fixture.json
python manage.py loaddata ./backbits/fixtures/projects_fixture.json
python manage.py loaddata ./backbits/fixtures/skills_fixture.json

# static collection
python manage.py collectstatic --no-input

# executes Procfile
honcho start