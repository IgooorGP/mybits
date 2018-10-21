#----------------------------------------------------------
# Shell script to start the application by calling Honcho.
#----------------------------------------------------------

# adds mybits package to the python path
export PYTHONPATH="$PYTHONPATH:./mybits"

# executes Procfile
honcho start