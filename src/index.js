import Fastify from 'fastify';
import algoliaPlugin from './plugins/algolia.js';
import searchRoutes from './routes/searchRoutes.js';

async function buildServer() {
  const fastify = Fastify({
    logger: true
  });

  fastify.register(algoliaPlugin);
  fastify.register(searchRoutes);

  return fastify;
}

export default buildServer;
