#!/bin/bash

echo "[DEPLOY]: Reading deploy config file..."
source .deployconfig

echo "[DEPLOY]: Starting rsync..."
rsync --exclude-from ".deployignore" -avz -e ssh -r "$(pwd)" "$user@$server_ip:$remote_folder_path"

echo "[DEPLOY]: Deployment is over."