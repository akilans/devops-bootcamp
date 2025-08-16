#!/bin/bash
 while true; do
   echo -n "Enter folder name (or 'exit' to quit): "
   read folder_name
   if [[ $folder_name == "exit" ]]; then
        echo "Exiting..."
        break
   else
        mkdir -p "$folder_name"
        echo "Folder '$folder_name' created."
   fi
done