FROM nginx:1.30.4-otel

RUN  touch /var/run/nginx.pid && \
     chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid /etc/nginx/conf.d

# Website
COPY --chown=nginx:nginx dist /usr/share/nginx/html
# Config
COPY --chown=nginx:nginx nginx.conf  /etc/nginx/nginx.conf
COPY --chown=nginx:nginx nginx.conf.template /etc/nginx/templates/default.conf.template

USER nginx
