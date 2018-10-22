#----------------------------------------------------------
# Shell script to start the application by calling Honcho.
#----------------------------------------------------------

# adds mybits package to the python path
export PYTHONPATH="$PYTHONPATH:./mybits:./backbits"

# migrate
python mybits/manage.py makemigrations
python mybits/manage.py migrate

# executes Procfile
honcho start