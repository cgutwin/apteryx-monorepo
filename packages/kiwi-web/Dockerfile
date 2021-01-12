FROM node:lts-alpine as build
ARG GRAPHQL_ENDPOINT
ARG PUBLIC_PATH
ENV GRAPHQL_ENDPOINT $GRAPHQL_ENDPOINT
ENV PUBLIC_PATH $PUBLIC_PATH
WORKDIR /usr/src/kiwi-web
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn run build

FROM nginx:alpine
COPY --from=build /usr/src/kiwi-web/dist /usr/share/nginx/html
COPY --from=build /usr/src/kiwi-web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
