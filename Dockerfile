FROM node

VOLUME    ["/data"]
WORKDIR   /data
ADD       package.json /data

RUN npm install
RUN npm install phantomjs -g
ENV PATH $PATH:/data/node_modules/.bin

ADD       . /data

CMD node server.js
