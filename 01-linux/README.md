# Linux Basics

- What is linux
    - Unix - Frist successfull OS, CLI only
    - minix - not opensource
    - windows - GUI
    - BSD unix - MacOs, CLI & GUI
    - Linux - Unix inspired OS but built from scratch - GUI & CLI
    - macOS is a direct child of UNIX. 
    - Linux is a smart cousin who learned everything from UNIX but built its own house!

- Kernel and Distribution
    - The engine of a car — powerful, but not useful alone unless you build the rest of the car around it.
    - kernel is the engine, the distribution is the entire car — with the body, seats, steering, and controls — ready to drive

- Filesystem - /, /home, /root
    - / The starting point of the entire filesystem.
    - Everything (files, folders, devices, etc.) is located under /
    ```
    - /
        ├── bin       → Essential commands -> /bin → /usr/bin
        ├── boot      → Bootloader & kernel
        ├── dev       → Devices
        ├── etc       → Configuration
        ├── home      → User data
        ├── lib       → Libraries -> /lib -> usr/lib
        ├── media     → Removable media
        ├── mnt       → Mount points
        ├── opt       → Optional software
        ├── proc      → Kernel & process info
        ├── root      → Admin's home
        ├── run       → Runtime data
        ├── sbin      → System commands -> /sbin → /usr/sbin
        ├── sys       → Kernel info
        ├── tmp       → Temporary files
        ├── usr       → User apps & data
        └── var       → Logs, cache, mail, etc.
    ```

- Basic commands
    - ls
    - cp
    - mv
    - touch
    - cd
    - mkdir
    - rmdir
    - rm
    - pwd
    - ~ / . .. 
    - tab

- user & group management - whoami, id, useradd, usermod
    - /etc/passwd - users and password
    - /etc/group - collection of users
    - Each file or directory in Linux can have user, group and permissions

    ```bash
        sudo useradd -m akilan
        id akilan #( list all info, uid, gid and groups)
        su akilan
        #try running sudo command
        sudo usermod -aG sudo akilan
        sudo userdel -r akilan
        sudo -i # switch to root user
    ```

- file and folder permissions - chmod, chown
    - root users can modify any files, folders

    ```
    - drwxrwxr-x 2 ubuntu ubuntu 4096 Aug  9 05:02 hello 
        d | rwx | rwx | r-x
        --+-----+-----+----
        |  |     |     |
        |  |     |     +-- Others (world)
        |  |     +-------- Group
        |  +-------------- Owner
        +----------------- File type
        d = it's a directory

        rwx = owner (ubuntu) can read, write, and execute

        rwx = group (ubuntu) can read, write, and execute

        r-x = others can read and execute, but not write
    ```
    - -rw-rw-r-- 1 ubuntu ubuntu   13 Aug  9 05:02 hello.txt

    ```bash
        chmod o+rwd /home/akilan
        chmod 777 /home/akilan
    ```

- file commands - cat, less, head, tail, grep, find
```bash
    cat /var/log/auth.log
    less /var/log/auth.log
    head -n 10 /var/log/auth.log
    tail -n 10 /var/log/auth.log
    tail -f /var/log/auth.log
    grep invalid /var/log/auth.log
    grep Invalid /var/log/auth.log
    grep -i invalid /var/log/auth.log
    cat /var/log/auth.log | grep invalid
    find /home -name "hello.txt"
    find /home -iname "hello.txt"
    find /var/log -name "*.log"
    find /home -type d -name "hello"
```
    
- package management - apt, yum, dnf
- basic networking - ifconfig, curl, ping, ip, netstat
- DNS lookup and port scanning: dig, nslookup, nmap
- vi editor

### mini project

- Setup a httpd sever and serve html files
```bash
sudo apt update
sudo apt install apache2 -y
sudo systemctl status apache2 #check status
sudo systemctl enable apache2 #start the service on every reboot
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl restart apache2
```
- Setup a nginx server and serve html files
```bash
sudo yum install httpd -y
sudo systemctl status httpd #check status
sudo systemctl enable httpd #start the service on every reboot
sudo systemctl start httpd
sudo systemctl stop httpd
sudo systemctl restart httpd
```