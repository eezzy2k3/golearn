# Use the official Node.js Alpine image as the base image
FROM node:14-alpine

# Install Python and other system dependencies
RUN apk add --no-cache python3 make g++



# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port that the Node.js application will listen on
EXPOSE 5000

# Command to start the Node.js application
CMD ["node", "app.js"]
