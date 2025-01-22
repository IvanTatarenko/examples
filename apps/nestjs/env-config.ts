export const ENV_CONFIG = {
  // database
  DB_HOST: process.env.POSTGRES_HOST,
  DB_PORT: parseInt(process.env.POSTGRES_PORT),
  DB_USERNAME: process.env.POSTGRES_USER,
  DB_PASSWORD: process.env.POSTGRES_PASSWORD,
  DB_NAME: process.env.POSTGRES_DB,
};
