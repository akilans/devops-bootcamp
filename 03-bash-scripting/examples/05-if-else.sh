#!/bin/bash
echo -n "Enter a number:"
read num

if [ $num -gt 10 ]; then
  echo "Greater than 10"
else
  echo "10 or smaller"
fi