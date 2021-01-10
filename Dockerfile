FROM node:lts-alpine
WORKDIR /usr/src/apteryx
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build
EXPOSE 4000
ENV NODE_ENV=production
CMD ["node", "index.js"]
