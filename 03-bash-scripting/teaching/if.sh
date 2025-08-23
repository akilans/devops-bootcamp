#!/bin/bash
set -e 
echo -n "Enter a number: " 
read NUMBER
if [ "$NUMBER" -gt 10 ]; then
  echo "The number is greater than 10."
else
  echo "The number is 10 or less."
fi
echo "You entered: $NUMBER"