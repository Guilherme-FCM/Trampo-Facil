FROM node:18-alpine

WORKDIR /app/server
COPY ./server .

EXPOSE 8080
CMD yarn install; yarn dev;