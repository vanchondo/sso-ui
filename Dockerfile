FROM node:18 AS builder

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app/
RUN npm run build --prod

# Bundle static assets with nginx
FROM nginx:stable-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]