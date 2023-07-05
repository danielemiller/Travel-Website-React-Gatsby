FROM node:14 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:14
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/public ./public
RUN npm install -g serve
EXPOSE 3002
CMD ["serve", "-s", "public", "-l", "3002"]
