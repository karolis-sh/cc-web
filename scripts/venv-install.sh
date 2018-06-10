#!/bin/bash
. $(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/config.sh

python3 -m venv $VENV_DIR
echo "${C_BLUE}venv created - ${C_GREEN}${VENV_DIR}${C_DEFAULT}\n"
