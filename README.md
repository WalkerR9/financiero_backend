
# Pasos
1. Instalar cliente e inicializar el proyecto, se usa strict para manejar TS

npm i -g @nestjs/cli
nest new project-name --strict

2. Instalar manejo de env y sql

npm i --save @nestjs/config
npm install --save @nestjs/typeorm typeorm mysql2


# Ejecutar servidor


1. Para ejecutar el servidor

npm run start
npm run start:dev

2. Autofix de slint y formato con prettier

npm run lint
npm run format
nest start --env-file .env
