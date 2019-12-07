# Shell Scripting by Jason Cannon

Script - a command line program that contains a series of commands which is then executed by an intepreter (shell in this case). Great at automating tasks.

Shebang: indicate the script to use "something" as the intepreter

If you want bash as the intepreter

```sh
#!/bin/bash
```

If you want zsh as the intepreter

```sh
#!/bin/zsh
```

### Running a script in the background?

```sh
#!/bin/bash
echo 'Hello scripting'
sleep 90
```

TODO: look up sleep command

```
./script.sh &
```

seems to run in the background

```
ps -fp $PID
```

this lets you look at the process table

### Shebang or not to Shebang

If a script doesnt contain the Shebang, the commands are executed using your shell. Different shells have varying syntax.

Also, you dont have to use a shell as your intepreter for your scripts.

For example, you can use the python intepreter:

```sh
#!/usr/bin/python
print "This is a python script"
```

### Running scripts

You need to give the script permission to run in the shell before you execute it.

```
chmod 755 script.sh
```

Then run it,

```
./script.sh
```

### Variables

- Name-Value pairs
- By convention, uppercase
- No spaces between = and "
- Syntax: VARIABLE_NAME="Value"
- To use a variable, \$VARIABLE_NAME
- or \${VARIABLE_NAME}

### Assigning the output of a command to a variable

```sh
#!/bin/bash
SERVER_NAME=$(hostname)
echo 'You are running this script on $SERVER_NAME'
```

### Conditional statements

```sh
if [ condition-is-true ]
then
  commands
elif [ condition-is-true ]
then
  commands
else
  commands
fi
```

To look up test conditions:

```sh
#!/bin/bash
help test
```
