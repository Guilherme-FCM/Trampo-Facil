FROM node:18-alpine

WORKDIR /app/client
COPY ./client .

EXPOSE 3000
CMD yarn dev