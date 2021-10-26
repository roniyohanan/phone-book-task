FROM node:14.8-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030

RUN npm run build
CMD [ "node", "/usr/src/app/dist/index.js"]