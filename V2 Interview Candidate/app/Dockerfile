FROM python:3.8.0
EXPOSE 8000 3000
WORKDIR /app 

# Install Python dependencies
RUN pip install --upgrade pip
COPY requirements.txt /app
RUN pip3 install -r requirements.txt --no-cache-dir

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update && apt-get install -y nodejs

# Install npm dependencies
COPY ./package.json /app/package.json
RUN npm install

# Copy the rest of the application code
COPY . /app 

# Make the entrypoint script executable
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
