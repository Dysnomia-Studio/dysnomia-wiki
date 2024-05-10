FROM nginx:1.26.0

USER nginx

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf