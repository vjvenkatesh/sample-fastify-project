import algoliasearch from 'algoliasearch';
import fp from 'fastify-plugin';

async function algoliaPlugin(fastify, options) {
  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  fastify.decorate('algolia', client);
}

export default fp(algoliaPlugin);
