# My Bits
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)

Mybits is a dockerized and responsive project that contains some bits (info) about me and a chatbot to answer questions! 

## Built with

* Python 3.7.1;
* Nginx as a revese proxy for the Django app;
* Django (backend and content management);
* Django Rest Framework (RESTful api development);
* Angular (frontend);
* Tox and pytest for testing;
* Gulp for frontend project building and file moving to Django folders.

## Mybits Demo

![alt-text](/backbits/docs/gif/mybits_demo_high.gif)

## Features

* A socket-based web chat which can be used to ask a bot some info about me such as my name, age, etc;

* An about-me section with some more detailed info about me;

* A section with my favorite github projects;

* A section that describes some important skills that I have been improving over the time;

* Section with my contacts (linkedin, github, etc.).

## File Summary

Here's a list of most important files which compose the structure of the project:

### Config-related files

```Dockerfile```: dockerfile to generate the container of the application; <br/>
```docker-compose```: docker-compose file to generate all the containers of the application;  <br/>
```docker-entrypoint.sh```: shell script used to run the application;  <br/>
```test.sh```: shell script to run the tests of the application.  <br/>

### Django-related files (Backend)

```/backbits```: package with the Django backend app;  <br/>
```/backbits/static/backbits```: package with all the static files required by the application for Django's development server;  <br/>
```/backbits/templates```: package with index.html generated by Angular for Django's development server;  <br/>
```/backbits/bot/```: package with the chat bot logic;  <br/>
```/backbits/media```: folder with uploaded files required to run the application locally.  <br/>

### Angular-related files (Frontend)
```/backbits/frontbits```: folder with the Angular app used to generate the frontend;  <br/>
```/backbits/frontbits/gulpfile.js```: gulpfile developed to move frontend files to django's assets folder and templates folder;  <br/>
```/backbits/frontbits/angular.json```: angular configurations in order to run with django;  <br/>

## Local Development

### Starting the backend and the frontend (angular)

In order to run this application, just clone this repo and run the following command!

```docker-compose up```

Since this is a fully dockerized application, starting the application is pretty straight forward!

This starts the development server on port 5005 which serves the Django app. However, making a GET request to:

```http://0.0.0.0:5005```  <-- BAD request!

Will NOT work (http 400) because the Django app is configured to only accept connections from the HOST:```localhost```!

Hence, in order to access the application, make a GET request to:

```http://localhost```

Now, this request is intercepted by the ```Nginx container``` which will reverse proxy the requests to the Django app!


### Starting the frontend only (angular serve)

In order to run just the angular app (no backend server), just run the following commands:

Go inside the directory: ```/backbits/frontbits.``` and run:

```ng serve``` or ```gulp serve```

### Building the frontend application (Angular)

In order to build the angular app and transfer all of its compiled files to be served by Django,
just run the following commands:

Go inside the directory: ```/backbits/frontbits/``` and run:

```gulp build-dev```
 
This will invoke ng build with the appropriate args and transfer the compiled files to Django's appropriate folders;

* Note: Gulp and Angular's client (ng command) MUST be installed with NPM! 

If not, install npm and node (I highly recommend using NVM for that), then install Gulp and the Angular command line client:

```npm install gulp```

```npm install -g @angular/cli```

Then, just execute the django server by running the following command on any folder:

```docker-compose up```

That's it! We compiled all the frontend code and transfered them to be served by Django!

## Tests

This application uses Tox to manage environments and run tests. In order to run, just invoke:

```tox```

## Deployment instructions

The bash script ```deploy.sh``` uses the rsync command to transfer safely the application files to a remote webserver. Hence, to deploy code to a remote instance:

```bash
source deploy.sh
```