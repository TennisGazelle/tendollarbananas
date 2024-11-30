# Base image with Python
FROM python:3.8-slim

# Set environment variables
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV PIPENV_VENV_IN_PROJECT=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy project files to the working directory
COPY api/ /app
COPY app.py /app/
COPY Makefile /app/
COPY config.py /app/

# Install pipenv
RUN pip install --no-cache-dir pipenv

# Install app dependencies via Makefile
RUN ls
RUN make install

# Expose the Flask app's port
EXPOSE 5000

# Default command to run Flask
CMD ["make", "run"]
