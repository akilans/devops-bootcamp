#!/bin/bash
set -e

while true; do
    echo -n "Enter directory name (or type 'exit' to quit): "
    read DIR_NAME
    if [ "$DIR_NAME" = "exit" ]; then
        echo "Exiting the script."
        break
    else
       mkdir -p $DIR_NAME
       echo "Directory '$DIR_NAME' created successfully."
    fi
done