FROM node:lts-alpine
WORKDIR /usr/src/apteryx
COPY . .
RUN yarn
RUN yarn run tsc
ENV NODE_ENV=production
ENV MONGO_URL=mongodb://mongo/apteryx
EXPOSE 4000
CMD ["node", "index.js"]
