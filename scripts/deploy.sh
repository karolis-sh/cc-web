#!/bin/bash
. $(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/config.sh

set -e
cd $ROOT_DIR

# Test if correct deploy terget is provided
if [ "$1" = "esc_test" ]; then
  GATSBY_DATA_TARGET=esc
  BUCKET=$ESC_TEST_BUCKET
  CLOUDFRONT_ID=$ESC_TEST_CLOUDFRONT_ID
  URL=$ESC_TEST_URL
elif [ "$1" = "esc_prod" ]; then
  GATSBY_DATA_TARGET=esc
  BUCKET=$ESC_PROD_BUCKET
  CLOUDFRONT_ID=$ESC_PROD_CLOUDFRONT_ID
  URL=$ESC_PROD_URL
else
  echo "Invalid deploy target provided - ${C_RED}${1}${C_DEFAULT}"
  exit 1
fi

echo "Starting deployment variables:"
echo "${C_BLUE}env        ${C_DEFAULT}- ${C_GREEN}${1}"
echo "${C_BLUE}bucket     ${C_DEFAULT}- ${C_GREEN}${BUCKET}"
echo "${C_BLUE}cloudfront ${C_DEFAULT}- ${C_GREEN}${CLOUDFRONT_ID}"
echo "${C_BLUE}url        ${C_DEFAULT}- ${C_GREEN}${URL}${C_DEFAULT}"

# Check for AWS credentials
AWS_USER=$(aws iam get-user)
if [ "$AWS_USER" == "" ]; then
  echo "${C_RED}No AWS user found${C_DEFAULT}"
  exit 1
fi
echo "AWS_USER = $AWS_USER"

# Build artifacts
NODE_ENV=production GATSBY_DATA_TARGET=$GATSBY_DATA_TARGET yarn build

# Sync s3
printf "${C_DARK_GRAY}"
aws s3 rm $BUCKET --recursive --region $BUCKET_REGION
aws s3 cp $BUILD_DIR $BUCKET \
  --include "*" \
  --exclude "static/*" \
  --recursive --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$NO_CACHE"
aws s3 cp $BUILD_DIR/static $BUCKET/static \
  --recursive --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$STATIC_CACHE"
aws s3 cp $BUILD_DIR $BUCKET \
  --exclude "*" \
  --include "__static-*" \
  --exclude "static/*" \
  --recursive --region $BUCKET_REGION --acl $BUCKET_ACL --cache-control "$ONE_MONTH_CACHE"

# Invalidate cloudfront
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"

printf "${C_BLUE}"
echo ====================================================
echo
echo " Deployed to ${C_GREEN}${URL}${C_BLUE}"
echo
echo ====================================================
printf "${C_DEFAULT}"
