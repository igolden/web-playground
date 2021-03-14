#!/bin/bash
killbg() {
        for p in "${pids[@]}" ; do
                kill "$p";
        done
}
trap killbg EXIT
pids=()
http-server -c-1 --silent &
pids+=($!)
node ../express_inspector/index.js  > /dev/null &
pids+=($!)
ngrok start -config=ngrok.yml profile api
