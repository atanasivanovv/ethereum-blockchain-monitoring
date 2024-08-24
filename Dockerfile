# Use an official Node.js runtime as a parent image
FROM node:18

# Set environment variables
ENV MSAPI_VERSION=${MSAPI_VERSION}
ENV NODE_ENV=production
ENV MSAPI_ENV=production
ENV MSAPI_PORT=8080

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD [ "node", "src/index.js" ]