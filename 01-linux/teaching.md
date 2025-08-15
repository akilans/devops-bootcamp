# Teaching

## Linux Basics

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
- Login into linux machine - user name & password, ssh, putty
- Filesystem - /, /home, /root
    - / The starting point of the entire filesystem.
    - Everything (files, folders, devices, etc.) is located under /
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
    - sudo useradd -m akilan
    - id akilan ( list all info, uid, gid and groups)
    - su akilan
    - try running sudo command
    - sudo usermod -aG sudo akilan
    - sudo userdel -r akilan
    - sudo -i -> switch to root user
- file and folder permissions - chmod, chown
    - root users can we any files, folders
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

    - -rw-rw-r-- 1 ubuntu ubuntu   13 Aug  9 05:02 hello.txt

    - chmod o+rwd /home/akilan
    - chmod 777 /home/akilan
- file commands - cat, less, head, tail, grep, find
    - cat /var/log/auth.log
    - less /var/log/auth.log
    - head -n 10 /var/log/auth.log
    - tail -n 10 /var/log/auth.log
    - tail -f /var/log/auth.log
    - grep invalid /var/log/auth.log
    - grep Invalid /var/log/auth.log
    - grep -i invalid /var/log/auth.log
    - cat /var/log/auth.log | grep invalid
    - find /home -name "hello.txt"
    - find /home -iname "hello.txt"
    - find /var/log -name "*.log"
    - find /home -type d -name "hello"

    
- package management - apt, yum, dnf
- basic networking - ifconfig, curl, ping, ip, netstat
- DNS lookup and port scanning: dig, nslookup, nmap
- vi editor

### mini project

- Setup a httpd sever and serve html files
- Setup a nginx server and serve html files


## Linux Advanced

- SSH
    - create a new user
    - create a password
    - login via ssh using a password
    - diable password authentication and restart ssh service
    - try login password
    - create and add private key
    ```bash
    scp Vagrantfile akilan@192.168.33.10:/home/akilan/ #from local to remote linux
    scp akilan@192.168.33.10:/home/akilan/hello.log .
    ```

- redirection
    - >, >>, <
    - STDIN (0) — keyboard input
    - STDOUT (1) — text output to the terminal    
    - STDERR (2) — error messages to the terminal
    ```bash
    echo "Akilan"
    # Akilan (stdout)
    echo "Akilan" 1> hello.txt
    ech "Akilan" 2> error.log # errors are captured in error.log file
    ls . /fake > result.log 2> error.log # errors goes to error.log, stdout goes to result.log
    # /dev/null - trash
    la fake/ > /dev/null 2>&1 # send errors to the same location stdout
    find / -name hello.txt 2>/dev/null 
    ```
- | tee vs echo > 
    ```bash
    sudo echo "Akilan" > /var/log/akilan.log #fails (permission denied)
    echo "Akilan" | sudo tee /var/log/akilan.log #works
    ```

- symlinks -> shortcut to another file or folder ( not a copy -> reference)
    ```bash
    ln -s /home/akilan/myfile.txt link.txt  
    ls -l
    lrwxrwxrwx 1 akilan akilan   18 Aug 15 10:00 link.txt -> /home/akilan/myfile.txt
    ```
- Hard links -> points to Inode (data) not path, if the target deleted no impact (only for files)
    ```bash
    echo "Akilan" > hello.txt
    ln hello.txt hello-bk.txt
    ls -lai
    ```

