#!/usr/bin/env bash

#current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "--- Let's get to work. Updating now. ---"

echo "--- running 'npm update' ---"
npm update

echo "--- running 'bower update' ---"
bower update

echo "--- All done, enjoy! :) ---"