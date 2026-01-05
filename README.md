
# Pasos
1. Instalar cliente e inicializar el proyecto, se usa strict para manejar TS

npm i -g @nestjs/cli
nest new project-name --strict

2. Instalar manejo de env y sql

npm i --save @nestjs/config
npm install --save @nestjs/typeorm typeorm mysql2

# Generar modulos de trabajo
nest generate module users
nest generate controller users  
nest generate service users   

# -> De esta forma todos los archivos quedan dentro del modulo de usuarios

# Migraciones 
npm install -D typeorm-ts-node-commonjs ts-node

# (AGREGAR EN package.json)
    "typeorm": "typeorm-ts-node-commonjs",
    "migration:generate": "npm run typeorm migration:generate -- -d dist/db/datasource.js",
    "migration:run": "npm run typeorm migration:run -- -d dist/db/datasource.js",
    "migration:revert": "npm run typeorm migration:revert -- -d dist/db/datasource.js"
    "seed": "ts-node src/db/seeders/index.ts"

# Pasos
 npm run migration:generate -- src/db/migrations/NombreDeTuMigracion
 npm run build
 npm run migration:run
# Ejecutar servidor


1. Para ejecutar el servidor

npm run start
npm run start:dev

2. Autofix de slint y formato con prettier

npm run lint
npm run format
nest start --env-file .env
