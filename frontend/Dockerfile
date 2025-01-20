FROM node:lts-slim AS build

WORKDIR /frontend

COPY ./package.json /frontend/package.json
COPY ./package-lock.json /frontend/package-lock.json
RUN npm install

COPY ./src /frontend/src
COPY ./index.html /frontend/index.html
COPY ./public /frontend/public
COPY ./vite.config.js /frontend/vite.config.js

RUN npm run build


FROM nginx:alpine AS final

COPY --from=build /frontend/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]