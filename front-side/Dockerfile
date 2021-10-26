FROM node:14.8-alpine 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build

EXPOSE 3000

