import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config();

const logger = new Logger('ENV_CONFIG');

function validateEnvVar(name: string, value: string | undefined): string {
  if (!value) {
    logger.error(`Змінна середовища ${name} не визначена або порожня.`);
  }
  return value;
}

export const ENV_CONFIG = {
  // database
  DB_HOST: validateEnvVar('POSTGRES_HOST', process.env.POSTGRES_HOST),
  DB_PORT: parseInt(validateEnvVar('POSTGRES_PORT', process.env.POSTGRES_PORT)),
  DB_USERNAME: validateEnvVar('POSTGRES_USER', process.env.POSTGRES_USER),
  DB_PASSWORD: validateEnvVar(
    'POSTGRES_PASSWORD',
    process.env.POSTGRES_PASSWORD,
  ),
  DB_NAME: validateEnvVar('POSTGRES_DB', process.env.POSTGRES_DB),
};
