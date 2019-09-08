#!/bin/bash

# Quits processes running on ports 3000, 5000, and 27017

stop_running_ports()
{
  for port in "$@"
  do
    echo "Stopping processes on port $port"
    kill -9 `lsof -i:$port -t`
  done
}

stop_running_ports 3000 5000 27017
