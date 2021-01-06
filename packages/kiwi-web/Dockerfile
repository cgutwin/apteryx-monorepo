FROM node:lts-alpine as build
WORKDIR /usr/src/kiwi-web
COPY . .
RUN yarn
RUN yarn run build

FROM nginx:alpine
COPY --from=build /usr/src/kiwi-web/dist /usr/share/nginx/html
COPY --from=build /usr/src/kiwi-web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
