FROM nginx:latest

WORKDIR /usr/src/app

COPY . /usr/src/nginx/html
