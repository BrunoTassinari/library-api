## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn dev

```

## Running Dev Environment With Docker

- Crie o arquivo .env
- Como o DB vai rodar no mesmo container, usando Nestjs, a variavel "DATASOURCE_HOST" deve ser o nome do dado ao DB
- Rode o comando: docker-compose up

```bash
# Para executar em segundo plano no terminal
$ docker-compose up

# Para executar em segundo plano no terminal
$ docker-compose up -d

# Parar os containers
$ docker-compose stop

# Para excluir os containers
$ docker-compose down
```

## Create migrations

```bash

# Create migration
$ yarn prisma migrate dev --name init

```
