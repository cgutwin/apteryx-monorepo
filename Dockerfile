FROM node:lts-alpine as build
WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn workspaces foreach -pt run build

FROM nginx:alpine
COPY --from=build /usr/src/app/packages/kiwi-web/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
