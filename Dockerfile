FROM php:8.3-cli

WORKDIR /app

COPY backend/ backend/
COPY data/ data/

RUN chmod -R 777 data/

EXPOSE 80

CMD ["php", "-S", "0.0.0.0:80", "-t", "backend/public"]
