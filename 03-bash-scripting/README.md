# Basics of Bash Scripting

# Topics

- hello world

```bash
    echo "hello word"
    # bash hello.sh
```

- make it executable
```bash
    chmod +x hello.sh
    #./hello.sh
```

- mention shell
```bash
    #!/bin/bash
    echo "hello word"
    # ./hello.sh
```

- make it as binary
```bash
    #rename to hello
    echo $PATH
    cp hello /usr/local/bin/
    hello
```

- variables
```bash
    #!/bin/bash
    NAME="Akilan" # no space
    echo "Hello $NAME"
```

- input from user
```bash
    #!/bin/bash
    echo -n "Enter your name:"
    read name
    echo -n "Enter your password:"
    read -s password
    echo "your name is $name"
    echo "your password is $password"
```

- arguments to the script
```bash
    #!/bin/bash
    echo "Script name: $0"
    echo "Hello, $1!"
    echo "You are learning $2."

    echo "You passed $# arguments."
    echo "They are: $@"
```

- if else example
```bash
    #!/bin/bash
    echo -n "Enter a number:"
    read num

    if [ $num -gt 10 ]; then
    echo "Greater than 10"
    else
    echo "10 or smaller"
    fi
```

- for loop example
```bash
    #!/bin/bash
    for i in {1..5}
    do
    echo "Number $i"
    done

    # loop through files in current directory
    for file in *
    do
    echo "File: $file"
    done

    # loop through command line arguments
    for arg in "$@"
    do
    echo "Argument: $arg"
    done

    # loop through a filesystem command output
    for folder in $(cat folders.txt)
    do
    echo "Folder: $folder"
    done
```

- while loop example
```bash
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
```

- function example
```bash
    #!/bin/bash
    greet() {
    echo "Hello, $1!"
    }

    greet "Akilan"
```

## Two projects
- Website down detector
- System report