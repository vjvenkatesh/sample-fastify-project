import buildServer from './index.js';
import dotenv from 'dotenv';

dotenv.config();

const start = async () => {
  const fastify = await buildServer();

  try {
    await fastify.listen({ port: process.env.PORT });
    fastify.log.info(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
