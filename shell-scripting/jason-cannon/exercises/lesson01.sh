#!/bin/bash

# EXERCISE 1
# echo 'Shell scripting is fun'

# EXERCISE 2
# TEST_VAR="Shell Scripting is fun"
# echo "$TEST_VAR"

# EXERCISE 3
# HOST_NAME=$(hostname)
# echo "This script is running on $HOST_NAME"

# EXERCISE 4
# help test
if [ -e /etc/shadow ]
then
  echo "Shadow Passwords are enabled"
  if [ -w /etc/shadow ]
  then
    echo "You have permissions to write"
  else
    echo "You do not have permissions to write"
  fi
else
  echo "Shadow Passwords are not enabled"
  if [ -e /etc/passwd ]
  then
    echo "Passwords are enabled though"
  else
    echo "Passwords are not enabled though"
  fi
fi