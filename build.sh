#!/usr/bin/env bash

set -e

docker run --rm -it --name node_20 --user ${UID}:${GID} -v "$(pwd)/visual-editor":/usr/src/myapp -w /usr/src/myapp node:20-alpine sh -c "npm run build"
cp ./visual-editor/dist/VisualEditor.standalone.js ./VisualEditor.standalone.js
