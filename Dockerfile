FROM node:18-alpine AS build

WORKDIR /app
ENV PROJECT_NAME=lukoil

COPY . /app
RUN npm install
RUN npm run build


FROM nginx:latest AS front

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
