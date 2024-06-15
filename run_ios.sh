#!/bin/bash

PORT_NUMBER=8081
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill 

# Start Metro Bundler
npx react-native start --port $PORT_NUMBER &

# Wait for Metro Bundler to start
sleep 8

# Start the app on Android (replace 'android' with 'ios' for iOS)
npx react-native run-ios --port $PORT_NUMBER