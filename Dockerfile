FROM node:18  AS build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
# RUN npm install
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
COPY . /app/
RUN npm run build --prod

# FROM nginx:1.23.3
# COPY --from=build-step /app/build /usr/share/nginx/html
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]