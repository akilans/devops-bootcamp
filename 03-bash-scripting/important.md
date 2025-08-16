
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

    ```bash
    cat hello.log | grep akilan
    du -ah . | sort -hr | head -n 5 # display top 5 largest files/directories
    ```
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
```bash
    grep "error" app.log     # lines containing 'error'
    grep -i "error" app.log  # case-insensitive
    cat hello.log | grep -i akilan # find from previous command
```
- system info 
```bash
    nproc # number of cpus
    free # RAM memory details
    df # storage details
    du # folder wise storage
```

- awk
```bash
    # awk 'pattern { action }' file
    ls -l | awk '{print}'
    ls -l | awk '/hello/ {print $9}'
    free -m | awk '/Mem:/ {print "Used:", $3, "Free:", $4}'
    df -h / | awk 'NR==2 {print $2}' # 2nd row only
```

- sed
```bash
    #sed 's/pattern/replacement/' file
    echo "Windows is great" | sed 's/Windows/Linux/'
    sed -i 's/Windows/Linux/' os.log # replace first Windows by Linux on each line
    sed -i 's/Windows/Linux/g' os.log # replace all Windows by Linux on each line
    sed -i 's/Windows/Linux/Ig' os.log # replace all Windows by Linux on each line + ignore case sensitive

```

- wget
```bash
    wget https://example.com/file.zip  # download to current dir with same name
    wget -O myfile.zip https://example.com/file.zip  # save as custom name
```

- curl
```bash
    curl localhost
    curl -O localhost/index.html
    curl -o apache.html localhost/index.html
    curl -s -o /dev/null -w %{http_code} localhost
    curl -L -s -o /dev/null -w %{http_code} google.com # -L follows redirect
```