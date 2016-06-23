FROM node

WORKDIR   /data

ADD package.json .

RUN npm install

ADD . /data

CMD node server.js
