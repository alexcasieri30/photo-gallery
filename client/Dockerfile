FROM node:20 AS base

WORKDIR /usr/app

COPY . .

RUN npm install --unsafe-perm

EXPOSE 3000

CMD ["npm", "run", "dev"]