# base python 3 image 
FROM python:3.6.2rc2

# creates directory and copies all files
ADD . /mybits

# sets work directory
WORKDIR mybits

# makes entry point script to be executable
RUN chmod +x ./docker-entrypoint.sh

# makes wait-for-it script to be executable
RUN chmod +x ./wait-for-it.sh

# makes run_tests script to be executable
RUN chmod +x ./run_tests.sh

# installs all requirements on the container
RUN pip install -r requirements.txt

# exposes Flask port
EXPOSE 5000

# runs when docker container is started (compose executes it)
# ENTRYPOINT "./docker-entrypoint.sh"

