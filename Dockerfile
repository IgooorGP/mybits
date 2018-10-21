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
RUN chmod +x ./test.sh

# installs all requirements on the container
RUN pip install -r requirements.txt
