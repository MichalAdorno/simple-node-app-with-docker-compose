FROM alpine

EXPOSE 8077:8080
EXPOSE 6379:6379

WORKDIR ./ /usr/myapp

RUN apk add --no-cache bash && \
    apk add --update nodejs npm

COPY ./package.json ./

RUN npm install

COPY ./ ./

ENTRYPOINT [ "npm", "start" ]