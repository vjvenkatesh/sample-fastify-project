export async function search(query, indexName) {
    const index = this.algolia.initIndex(indexName);
    return index.search(query);
  }
  