# Makefile for tdb-api

# Variables
APP_NAME = tdb-api
FLASK_APP = app.py  # Replace with your Flask entry point
FLASK_ENV = development  # Change to production as needed

# Install dependencies
install:
	ls
	pipenv install

# Run Flask app
run:
	PIPENV_PIPFILE=Pipfile pipenv run python3 -m flask run --host=0.0.0.0 --port=5000

# Deploy app (production example)
deploy:
	PIPENV_PIPFILE=Pipfile pipenv run flask run --host=0.0.0.0 --port=80 --env production

# Clean environment
clean:
	pipenv --rm

# Help
help:
	@echo "Available targets:"
	@echo "  install   - Install dependencies using Pipenv"
	@echo "  run       - Run the Flask development server"
	@echo "  deploy    - Run the Flask app for production"
	@echo "  clean     - Remove the virtual environment"
	@echo "  help      - Show this help message"

	@echo "For secure compatibility with your local python distribution, use the following commands:"
	@echo "  python3 -m pip install --user pipenv"
	@echo "  instead of"
	@echo "  sudo apt-get install pipenv"