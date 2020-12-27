FROM node:12.19.0-alpine

ARG DB_HOST=localhost
ARG DB_PORT=5432
ARG DB_NAME=de
ARG DB_USERNAME=admin
ARG DB_PASSWORD=admin

# Required for node-gyp which is required for bcrypt
RUN apk update && apk add python make g++

WORKDIR /usr/src/app
COPY package*.json .
RUN npm i
COPY . .

ENV DB_HOST ${DB_HOST}
ENV DB_PORT ${DB_PORT}}
ENV DB_NAME ${DB_NAME}}
ENV DB_USERNAME ${DB_USERNAME}
ENV DB_PASSWORD ${DB_PASSWORD}

CMD ["npm", "start"]