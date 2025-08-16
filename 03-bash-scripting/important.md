
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
    - |, >, >>, <
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

- tee vs echo > 
    ```bash
    sudo echo "Akilan" > /var/log/akilan.log #fails (permission denied)
    echo "Akilan" | sudo tee /var/log/akilan.log #works
    ```

- symlinks -> shortcut to another file or folder ( not a copy -> reference)
    ```bash
    ln -s /home/akilan/myfile.txt link.txt  # creats shortcut
    ls -l
    lrwxrwxrwx 1 akilan akilan   18 Aug 15 10:00 link.txt -> /home/akilan/myfile.txt #l indicates is a symlink
    ```
    
- Hard links -> points to Inode (data) not path, if the target deleted no impact (only for files)

    ```bash
        echo "Akilan" > hello.txt
        ln hello.txt hello-bk.txt
        ls -lai
    ```
- process management
```bash
    ps
    ps aux
    kill --help
    kill -l
    kill -9 $ID
```
- grep

- nproc

- free

- df

- du

- awk

- sed

- wget

- curl