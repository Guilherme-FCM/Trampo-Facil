FROM node:18-alpine

WORKDIR /app/client
COPY ./client .

EXPOSE 80
CMD yarn install; yarn dev;