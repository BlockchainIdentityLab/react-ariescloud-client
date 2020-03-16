# build angular app
FROM node:10.15.3-alpine

RUN npm install webpack -g
WORKDIR /usr/src/app


ADD package.json ./
ADD package-lock.json ./
RUN npm install

ADD dist ./dist
ADD .env ./
ADD webpack.config.js ./
ADD .babelrc ./

ADD src ./src

#ENTRYPOINT ["/bin/bash", "/"]
CMD [ "npm", "start" ]
