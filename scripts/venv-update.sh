#!/bin/bash
. $(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/config.sh

. $SCRIPTS_DIR/venv-activate.sh

echo "${C_DEFAULT}Updating python venv${C_DARK_GRAY}"
pip install --upgrade pip
pip3 install awscli==1.14.7
echo "${C_BLUE}venv up-to-date${C_DEFAULT}\n"
