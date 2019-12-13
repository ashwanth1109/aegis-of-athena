# SECTION 3 - Functions

Why Functions? Because DRY.

- Write once, use many
- reduce script length
- single source to debug
- easy to maintain, more readable

Function must be defined before call.

### Two ways to create a function in a shell script

```sh
#!/bin/bash
function func1() {
  # Code goes here
}
```

```sh
#!/bin/bash
func1() {
  # code goes here
}
```

Calling this function:

```sh
#!/bin/bash
func1() {
  # code goes here
}
func1
```

### Funception

```sh
#!/bin/bash

hello() {
  echo "Hello"
  world # its defined before call since hello call is after
}
world() {
  echo "World"
}
hello
```

### Positional parameters

```sh
#!/bin/bash
hello() {
  echo "Hello $1"
}
hello Rick
```

```sh
#!/bin/bash
hello() {
  for NAME in $@
  do
    echo "Hello $NAME"
  done
}
hello Rick Morty Summer
```

### Variable Scope

#### Global Variables

By default all variables are global and they have to be defined before function call

```sh
#!/bin/bash
func1() {
  GLOBAL_VAR=1
}
# GLOBAL_VAR not available yet
echo $GLOBAL_VAR
func1
# GLOBAL_VAR now available
echo $GLOBAL_VAR
```

#### Local Variables

- can only be accessed inside functions
- local LOCAL_VAR=1
- only functions can have local variables
- best practice to use local inside functions

### Return Codes

Functions have an exit status which is sometimes called a return code.

```
return RETURN_CODE
```

otherwise it defaults to the exit status of the last command executed in the function

### Backup Files script

```sh
#!/bin/bash
backup_file() {
  if [ -f $1 ]
  then
    BACK="/tmp/$(basename ${1}).$(date +%F).$$"
    echo "Backing up $1 to $BACK"
    cp $1 $BACK
  fi
}

backup_file etc/hosts
if [ $? -eq 0 ]
then
  echo "Backup succeeded"
fi
```
