#!/bin/bash
set -e  # Exit script on any command failure

cd portfolio

# Pull changes
echo "Pulling Changes"
git pull || { echo "Git pull failed"; exit 1; }

# Build the app
echo "Building App"
npm run build || { echo "Build failed"; exit 1; }

# Kill the port before running the app
echo "Killing server"
fuser -k 3000/tcp || { echo "Failed to kill the server"; exit 1; }

echo "Running app and ddns script"

# Run the App
nohup npm run start > npm_output.log 2>&1 & || { echo "Failed to start the app"; exit 1; }

# Run NOIP
nohup noip-duc -g all.ddnskey.com --username $NOIP_USERNAME --password $NOIP_PASSWORD > noip_output.log 2>&1 & || { echo "Failed to run NOIP"; exit 1; }

echo "The scripts are now running in the background. You can close the terminal."
