FROM node:12.19-alpine As development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:12.19-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}