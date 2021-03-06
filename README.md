# NodeJs Tasks

## Features

- **Framework**: Express
- **Authentication**: JWT
- **Database**: PostgreSQL (Sequelize)
- **Code**: ESMAS(the fansy import), ESLint, Prettier, Husky
- **Debuging**: Debug, VS Code configurations
- **Logging**: Winston
- **Testing**: Jest, SuperTest
- **Continuous Integration**: GitHub Actions + Docker Compose
- **Other**: Nodemon, DotEnv
- Well structured

## Getting Started

```shell
git clone https://github.com/a-bew/nodejs-task
cd nodejs-task

```

## Environment Variable

```shell
  cp .env.example .env
  cp .env.development.example .env.development
  cp .env.test.example .env.test

  - Additional Changes
  Check and remove all occurrence of .example extension in the following files

  - Dockerfile
  - docker-compose.yml
  - src/config/config.js

```

## How to RUN locally

```
     - name: Install dependencies
        run: npm ci
      - name: Build the Docker image
        run: APP_PORT=7000 JWT_SECRET=secret docker compose up --build -d
        env:
          JWT_SECRET: secret
          APP_PORT: 7000
      - name: Set Up Db And Migration
        run: sh setupDb/nodeV1.sh
      - name: Run end-to-end tests
        run: npm run test
```

## Access Docker Shell (Ref: setupDB/nodeV1/sh)

### drop db command

` docker compose exec <container-name> npx sequelize-cli db:create <database-name> --env <ENV>`

### create db command

`docker compose exec <container-name> \ npx sequelize-cli db:create --env <ENV>`

### create db migrate

`docker compose exec <database-name> npx sequelize-cli db:migrate --env <ENV>`

### Access DB for the project

`docker compose exec postgresdb psql -U docker`

### switch to the app database

`\c development`

### Query database Created DB Table from migration(Ref: setupDB/nodeV1/sh)

- `select * from "Users";`
- `select * from "Roles";`
- `select * from "Movies";`

## Generate JWT keys

```
    curl --location --request POST '0.0.0.0:3000/auth' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "username": "basic-thomas",
        "password": "sR-_pcoow-27-6PAwCD8"
    }'

```

# POST MOVIE

```
  curl -d '{"title":"Morbius"}' \
    -H "Content-Type: application/json" \
    -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY0OTQwMDAwMSwiZXhwIjoxNjQ5NDAxODAxLCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.GlbEVHPKMKULUqOQpQXRcpeb9zSIghfaq2tUmGYksS8' -X POST 0.0.0.0:3000/movies
```

    `Response: {"message":"Movie RRR Added Successfully"}`

# GET MOVIE

```shell
      curl -X GET "http://127.0.0.1:7000/movies" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY1MDE5Mzg1MCwiZXhwIjoxNjUwMTk1NjUwLCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.cw8LFffw48XufKQBIaH9zInRP3873W1aQ2o94cJdsvs"

    Response: [{
        "id":1,
        "userId":123,
        "title":"Morbius",
        "release":"01 Apr 2022",
        "genre":"Action, Adventure, Drama",
        "director":"Daniel Espinosa",
        "createdAt":"2022-04-08T07:40:22.254Z",
        "updatedAt":"2022-04-08T07:40:22.254Z"
      },{
        "id":2,
        "userId":123,
        "title":"RRR",
        "release":"25 Mar 2022",
        "genre":"Action, Drama",
        "director":"S.S. Rajamouli",
        "createdAt":"2022-04-08T07:52:54.925Z",
        "updatedAt":"2022-04-08T07:52:54.938Z"
      }]
```
