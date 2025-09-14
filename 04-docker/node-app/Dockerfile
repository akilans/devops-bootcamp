FROM node:20.19

WORKDIR /akilan

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8001

CMD [ "node", "index.js" ]