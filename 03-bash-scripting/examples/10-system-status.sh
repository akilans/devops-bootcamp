#!/bin/bash

echo "===== System Information ====="

# CPU count
cpus=$(nproc)
echo "CPUs: $cpus"

# Memory (MB)
mem_total=$(free -m | awk '/^Mem:/ {print $2}')
mem_used=$(free -m | awk '/^Mem:/ {print $3}')
mem_free=$(free -m | awk '/^Mem:/ {print $4}')
echo "Memory (MB): Total=$mem_total, Used=$mem_used, Free=$mem_free"

# Disk (root partition) in GB
disk_total=$(df -h / | awk 'NR==2 {print $2}')
disk_used=$(df -h / | awk 'NR==2 {print $3}')
disk_free=$(df -h / | awk 'NR==2 {print $4}')
echo "Disk (/): Total=$disk_total, Used=$disk_used, Free=$disk_free"
