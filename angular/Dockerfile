FROM node:12-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:1.17.1-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step app/dist/massimo-dutti /usr/share/nginx/html 