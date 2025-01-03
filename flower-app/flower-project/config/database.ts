import path from 'path';

export default ({ env }: { env: any }) => {
  const client: 'mysql' | 'postgres' | 'sqlite' = env('DATABASE_CLIENT') || 'sqlite'; // Explicitly type 'client'

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST') || 'localhost',
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME') || 'strapi',
        user: env('DATABASE_USERNAME') || 'strapi',
        password: env('DATABASE_PASSWORD') || 'strapi',
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY'),
          cert: env('DATABASE_SSL_CERT'),
          ca: env('DATABASE_SSL_CA'),
          capath: env('DATABASE_SSL_CAPATH'),
          cipher: env('DATABASE_SSL_CIPHER'),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST') || 'localhost',
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME') || 'strapi',
        user: env('DATABASE_USERNAME') || 'strapi',
        password: env('DATABASE_PASSWORD') || 'strapi',
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY'),
          cert: env('DATABASE_SSL_CERT'),
          ca: env('DATABASE_SSL_CA'),
          capath: env('DATABASE_SSL_CAPATH'),
          cipher: env('DATABASE_SSL_CIPHER'),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA') || 'public',
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME') || '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client], // Now TypeScript knows `client` is one of the valid keys
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};