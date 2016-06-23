FROM node

WORKDIR   /data

ADD package.json .
RUN npm install
ENV PATH $PATH:/data/node_modules/.bin

ADD . /data

CMD node server.js
