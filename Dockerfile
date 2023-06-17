FROM node:18  AS build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app/
RUN npm run build --prod

FROM nginx:1.23.3
COPY --from=build-step /app/build /usr/share/nginx/html