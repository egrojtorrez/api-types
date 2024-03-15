FROM node:20-alpine3.18

WORKDIR /myapp
COPY . .
RUN npm i

COPY . .

CMD npm start
