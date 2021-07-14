FROM node:14-alpine

WORKDIR /usr/src/irish-trad-client

COPY ./ ./

RUN npm install

CMD ["sh"]