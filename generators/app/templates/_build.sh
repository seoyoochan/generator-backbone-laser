#!/bin/bash
set -o errexit # Exit on error
grunt build # Compile Production Code
cd dist # Enter production directory
if [ -d .git ]; then
  echo "[Confirmed] .git"
  git add -A && git status && git commit -am. && git push origin master
  echo "Deployment has been successfully done."
else
  echo "Error! [Unconfirmed] .git"
  echo "Initialize git and add your remote repository."
fi
