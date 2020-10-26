FROM node:12.19.0-alpine

# Required for node-gyp which is required for bcrypt
RUN apk update && apk add python make g++

WORKDIR /usr/src/app
COPY package*.json .
RUN npm i
COPY . .

CMD ["npm", "start"]