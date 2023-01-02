# describe node image in dockerhub
FROM node:alpine
# WORKDIR is where we are going to be in the docker container
WORKDIR /usr/src/app

ARG NPM_TOKEN
RUN echo $NPM_TOKEN
COPY .npmrc .npmrc

# copy this ../../package.json json inside the conthainer
COPY package.json package.json

RUN npm install
RUN rm -f .npmrc

Copy . .
