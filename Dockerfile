FROM node

RUN npm install http-server -g

# Mount to current directory into the container
VOLUME    ["/data"]
WORKDIR   /data
ADD       . /data

CMD http-server -p $PORT
