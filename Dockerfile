FROM node:alpine as development

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["nodemon", "--watch", ".", "--ext", "ts", "--exec", "ts-node", "src/index.ts"]