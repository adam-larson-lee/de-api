FROM node:12.19.0-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . ./

CMD ["npm", "start"]