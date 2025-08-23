#!/bin/bash
set -e  # Exit on error

function sayHello() {
  echo "Hello, $1!"
}

sayHello "World"
sayHello "Akilan"