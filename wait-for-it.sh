#!/bin/bash
set -e

host="$1"
port="$2"
shift 2
cmd="$@"

until nc -z -v -w30 "$host" "$port"; do
  >&2 echo "$host:$port Not ready yet - waiting..."
  sleep 1
done

>&2 echo "$host:$port Avaible to connection"
exec $cmd
