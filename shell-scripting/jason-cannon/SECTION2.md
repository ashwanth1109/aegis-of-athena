# SECTION 2 - Exit Statuses and Return Codes

Every time a command is executed, it returns an exit status, which can be used in a script for error checking.

- Range from 0 to 255
- 0: success
- else: error condition
- man or info command: meaning of exit statuses

\$? - contains the return code of the previously executed command

You can control the exit status of your script:

```sh
#!/bin/bash
exit 255 # 0 to 255
# otherwise defaults to exit status of last command
```

### Performing different actions based on an exit status

Example: test your connectivity to a host site

```sh
#!/bin/bash
HOST="google.com"
ping -c 1 $HOST # transmit 1 packet of data?
if [ "$?" -eq "0" ]
then
  echo "$HOST reachable"
else
  echo "$HOST unreachable"
fi
```

### Logical AND-OR, and the semi-colon

```sh
#!/bin/bash
mkdir /tmp/bak && cp test.txt /tmp/bak
```

command 2 will only execute if command 1 exits with 0

```sh
#!/bin/bash
cp test.txt /tmp/bak || cp test.txt /tmp
```

command 2 will only execute if command 1 exits with a non-zero status

```sh
#!/bin/bash
cp test.txt /tmp/bak ; cp test.txt /tmp
```

command 1 and command 2 will get executed

### Controlling your return code

```sh
#!/bin/bash
HOST="google.com"
ping -c 1 $HOST
if ["$?" -ne "0"]
then
  echo "$HOST unreachable"
  exit 1
fi
exit 0
```
