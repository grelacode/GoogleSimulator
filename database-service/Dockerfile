FROM postgres:9.4

ENV POSTGRES_DB: anywebdatabase
ENV POSTGRES_PASSWORD: qwerty123
ENV POSTGRES_USER: user
ENV DATABASE_HOST: db

COPY ./seeder.sql /docker-entrypoint-initdb.d/