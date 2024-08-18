#!/bin/bash
cd portfolio


# Pull changes
echo "Pulling Changes"
git pull

# Built the app
echo "Building App"
npm run build

# Kill the port before running the app
echo "Killing server"
fuser -k 3000/tcp


echo "Running app and ddns script"

# Run the App
nohup npm run start > npm_output.log 2>&1 &

# Run NOIP
nohup noip-duc -g all.ddnskey.com --username $NOIP_USERNAME --password $NOIP_PASSWORD > noip_output.log 2>&1 &

echo "The scripts are now running in the background. You can close the terminal."