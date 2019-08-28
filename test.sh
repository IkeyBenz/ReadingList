#!/bin/bash

# Wrote this because every time i test the app, the port stays
# in use, and it is annoying to manually increment the port or
# kill the process on localhost every time. So this increments
# the PORT env variable by 1 and runs the tests.

port=`cat .env | head -c 10 | tail -c 5`
newPort=$((port+1))
sed -i '' "s/$port/$newPort/" .env
npm test