setup:
	sh scripts/venv-install.sh
	sh scripts/venv-update.sh
	sh scripts/aws-configure.sh

deploy-test-esc:
	yarn
	sh scripts/venv-update.sh
	sh scripts/local-deploy.sh esc_test
