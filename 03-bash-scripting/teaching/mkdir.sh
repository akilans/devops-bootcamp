#!/bin/bash
set -e

echo -n "Enter directory name: "
read DIR_NAME

if [ -d "$DIR_NAME" ]; then
  echo "Directory '$DIR_NAME' already exists."
else
    mkdir "$DIR_NAME"
    echo "Directory '$DIR_NAME' created successfully."
fi
