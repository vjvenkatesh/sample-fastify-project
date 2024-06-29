import { handleSearch } from '../controllers/searchController.js';

async function searchRoutes(fastify, options) {
  fastify.get('/search', handleSearch);
}

export default searchRoutes;
