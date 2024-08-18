#!/bin/bash
set -e  # Exit on any error

cd portfolio

echo "Pulling Changes"
git pull

echo "Switching to correct Node.js version"
nvm use 22  # Adjust this version if needed

echo "Building App"
npm run build || { echo "Build failed"; cat /home/yadu/.npm/_logs/$(ls -t /home/yadu/.npm/_logs/ | head -n 1); exit 1; }

echo "Killing server"
fuser -k 3000/tcp

echo "Running app and ddns script"
nohup npm run start > npm_output.log 2>&1 &
nohup noip-duc -g all.ddnskey.com --username $NOIP_USERNAME --password $NOIP_PASSWORD > noip_output.log 2>&1 &

echo "The scripts are now running in the background. You can close the terminal."
