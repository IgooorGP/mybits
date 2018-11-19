#!/bin/sh

#---------------------------------------------------
# Shell script to start tests by invoking nosetests.
#---------------------------------------------------

# exports environment variables
set -a
. ./.env
set +a

# runs nosetests to discover all tests
exec nosetests -s --with-watch -v --with-coverage --cover-package=. --cover-erase
