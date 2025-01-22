## Як встановити NestJS

```
nest new project-name --package-manager pnpm
```

## ENV
[Додаємо змінні в nest централзовано через конфігурацію](./env-config.ts)

## Корисні бібліотеки
### TypeORM
#### Встановлення
```
pnpm install @nestjs/typeorm typeorm pg
```
#### Конфігурація
[Додавання в модуль](./src/app.module.ts)