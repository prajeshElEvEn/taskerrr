# Base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the project files to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose a port if your Node.js application listens on a specific port
EXPOSE 3000

# Define the command to run your Node.js application
CMD ["npm", "start"]

