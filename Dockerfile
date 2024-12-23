# Use a lightweight Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json to the container
COPY package.json .

# Install dependencies
RUN npm install

# Globally install the serve package
RUN npm install -g serve

# Copy the entire app directory into the container
COPY . .

# Build the Vite app
RUN npm run build

# Expose the application port
EXPOSE 3000

# Run serve to host the app, allowing SPA fallback (-s)
CMD ["serve", "-s", "dist"]
