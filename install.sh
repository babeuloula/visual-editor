#!/usr/bin/env bash

set -e

docker run --rm -it --name node_20 --user ${UID}:${GID} -v "$(pwd)/visual-editor":/usr/src/myapp -w /usr/src/myapp node:20-alpine sh -c "npm install --force"
