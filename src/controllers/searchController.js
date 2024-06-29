import { search } from '../services/searchService.js';

export async function handleSearch(request, reply) {
  const { query } = request.query;
  const results = await search.call(this, query, process.env.ALGOLIA_INDEX_NAME);
  console.log("\|||||||result we are getting",results);
  let FirstVal=results.hits[0];
  reply.send(FirstVal);
}
