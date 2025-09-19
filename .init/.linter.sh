#!/bin/bash
cd /home/kavia/workspace/code-generation/prototype-test-404-518/Prototype_test
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

