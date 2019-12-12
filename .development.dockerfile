FROM node:10.15.3

WORKDIR /usr/src/app

EXPOSE 3000

ENTRYPOINT yarn && yarn start
