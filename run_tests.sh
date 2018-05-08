#!/bin/sh

#---------------------------------------------------
# Shell script to start tests by invoking nosetests.
#---------------------------------------------------

# exports environment variables
set -a
. ./.env
set +a

# overwrites mongo database name for testing
export MONGO_DB_NAME=test_notifications_db

# overwrites initial token for testing
export INITIAL_REFRESH_TOKEN=0707

# overwrites apple subscription validation url for testing
export APPLE_INAPP_API_URL=https://sandbox.itunes.apple.com/verifyReceipt

# prints msg about test database
echo "----------------------------------------------------------------"
echo "-      Exporting new database name for mongoDB testing...      -"
echo "-      MONGO_DB_NAME: $MONGO_DB_NAME                           -"
echo "----------------------------------------------------------------"

echo "Creating RabbitMQ queues, exchanges, bindings..."
python startup_rabbit.py

# runs nosetests to discover all tests
exec nosetests -s --with-watch -vv --with-coverage --cover-package=. --cover-erase
