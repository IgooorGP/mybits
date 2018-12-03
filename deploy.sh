#!/bin/bash

# read -p "[DEPLOY]: Insert the username of the remove server to deploy: " user
# read -p "[DEPLOY]: Insert the IP address of the remove server to deploy: " server_ip
# read -p "[DEPLOY]: Insert the remote folder path to deploy: " remote_folder_path

echo "[DEPLOY]: Reading deploy config file..."
source .deployconfig

echo "[DEPLOY]: Starting rsync..."
rsync --exclude-from ".deployignore" -avz -e ssh -r "$(pwd)" "$user@$server_ip:$remote_folder_path"

echo "[DEPLOY]: Deployment is over."
