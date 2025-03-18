#!/bin/bash

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Install ShadCN components
echo "Installing ShadCN UI dependencies..."
npx shadcn-ui add button card toast

# Success message
echo "Installation complete! Run ./run.sh to start the application."