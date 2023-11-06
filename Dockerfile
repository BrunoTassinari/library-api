FROM node:alpine as development

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start:dev"]