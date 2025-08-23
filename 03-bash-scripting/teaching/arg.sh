#!/bin/bash
set -e  # Exit on error

script_name="$0"
directory_name_1="$1"
echo "total arguments: $#"

echo "All arguments: $@"

if [ $# -eq 0 ]; then
  echo "No directory name provided. Usage: $script_name <directory_name>"
  exit 1
fi

echo "Script name: $script_name"
echo "Directory name: $directory_name_1"


if [ -d "$directory_name_1" ]; then
  echo "Directory '$directory_name_1' already exists."
else
    mkdir "$directory_name_1"
    echo "Directory '$directory_name_1' created successfully."
fi
