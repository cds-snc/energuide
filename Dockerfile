FROM node:8.1-alpine
MAINTAINER Mike Williamson <mike.williamson@tbs-sct.gc.ca>

WORKDIR /app
USER node
ADD . .

EXPOSE 3000
CMD yarn start
