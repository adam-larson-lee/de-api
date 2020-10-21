FROM arm32v7/node:12.19-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . ./

CMD ["npm", "start"]