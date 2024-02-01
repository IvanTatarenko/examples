import * as process from 'process';

export default () => ({
  nest: {
    port: parseInt(getEnvProperty('NEST_PORT')),
    standart_login: getEnvProperty('STANDART_LOGIN'),
    statndart_password: getEnvProperty('STANDART_PASSWORD'),
  },
  postgres: {
    host: getEnvProperty('POSTGRES_HOST'),
    user: getEnvProperty('POSTGRES_USER'),
    password: getEnvProperty('POSTGRES_PASSWORD'),
    db: getEnvProperty('POSTGRES_DB'),
    port: parseInt(getEnvProperty('POSTGRES_PORT')),
  },
});


function getEnvProperty(key: string): string {
  const value = process.env[key];
  if (value) {
    return value;
  }
  throw new Error(`Environment variable ${key} is not set`);
}
