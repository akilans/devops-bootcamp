#!/bin/bash
# monitor web services

while true; do
    for web in $(cat web.txt); do
        status=$(curl -L -s -o /dev/null -w "%{http_code}" $web)
        if [ "$status" -ne 200 ]; then
            echo "Website $web is down! Status code: $status"
        else
            echo "Website $web is up! Status code: $status"
        fi     
    done
    sleep 5 # wait for 5 seconds before checking the next website
done