#!/bin/bash

# Start the Webpack process in the background
npm run dev &

# Start the Django server
exec python3 manage.py runserver 0.0.0.0:8000
