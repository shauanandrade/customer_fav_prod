FROM node:22-alpine
LABEL authors="shauandsousa"

RUN npm install -g @nestjs/cli

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

CMD ["tail","-f","/dev/null"]


