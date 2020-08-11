
FROM node:12

WORKDIR /usr/src

COPY . .

RUN npm install --quiet

EXPOSE 8080

CMD ["npm", "start"]