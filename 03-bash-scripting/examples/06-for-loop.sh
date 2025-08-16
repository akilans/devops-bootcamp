#!/bin/bash
for i in {1..5}
do
  echo "Number $i"
done

# loop through files in current directory
for file in *
do
  echo "File: $file"
done

# loop through command line arguments
for arg in "$@"
do
  echo "Argument: $arg"
done

# loop through a filesystem command output
for folder in $(cat folders.txt)
do
  echo "Folder: $folder"
done