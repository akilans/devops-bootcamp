#!/bin/bash
set -e

for i in {1..5}; do
  echo "Akilan $i"
done

echo "Total arguments: $#"
echo "All arguments: $@"



for folder in $(cat folders.txt); do
  echo "Folder from file: $folder"
  rmdir -p "$folder"
  echo "Folder '$folder' deleted successfully."
done
echo "All folders deleted successfully."