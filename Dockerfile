# Use uma imagem base do Node.js
FROM node:17
WORKDIR /app

RUN apt-get update && apt-get install -y netcat

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["./wait-for-it.sh", "db:3306", "--", "node", "index.js"]
