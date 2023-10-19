FROM node:18-alpine

WORKDIR /app/client
COPY ./client .

EXPOSE 80
RUN yarn install
CMD yarn dev