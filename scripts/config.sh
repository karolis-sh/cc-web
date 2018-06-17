#!/bin/bash
SCRIPTS_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
ROOT_DIR=$(dirname "$SCRIPTS_DIR")
VENV_DIR=$ROOT_DIR/venv
VENV_REQUIREMENTS_PATH=$ROOT_DIR/requirements.txt

# Colors
C_DEFAULT='\033[0m'
C_DARK_GRAY="\e[90m"
C_GREEN='\033[0;32m'
C_BLUE='\033[0;34m'
C_RED='\033[0;31m'

# Build
BUILD_DIR=./public
BUCKET_REGION="eu-central-1"
BUCKET_ACL="public-read"
NO_CACHE="public, max-age=0, must-revalidate"
STATIC_CACHE="public, max-age=31536000, immutable"
ONE_DAY_CACHE="public, max-age=86400"
ONE_WEEK_CACHE="public, max-age=604800"
ONE_MONTH_CACHE="public, max-age=2628000"
ONE_YEAR_CACHE="public, max-age=31536000"

ESC_TEST_BUCKET=s3://test.esconstruction.eu
ESC_TEST_CLOUDFRONT_ID=E1PAQ19AWKDBS7
ESC_TEST_URL=https://test.esconstruction.eu
ESC_PROD_BUCKET=s3://esconstruction.eu
ESC_PROD_CLOUDFRONT_ID=E26XV9XZP5F4KB
ESC_PROD_URL=https://esconstruction.eu
