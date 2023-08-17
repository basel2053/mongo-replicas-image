FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i pnpm -g
RUN pnpm install

COPY . .

CMD ["npm","start"]