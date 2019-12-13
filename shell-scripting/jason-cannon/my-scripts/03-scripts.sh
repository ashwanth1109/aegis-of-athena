HOST="google.com"
ping -c 1 $HOST # checkout ping cmd
if [ "$?" -eq "0" ]
then
  echo "$HOST reachable"
else
  echo "$HOST unreachable"
fi