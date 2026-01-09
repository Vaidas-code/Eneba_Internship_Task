const supabase = require('../config/supabase');

async function getAllGameKeys() {
  const { data, error } = await supabase.from('game_keys').select('*');
  if (error) throw error;
  return data;
}

async function searchGameKeys(search) {
  // Fuzzy search using pg_trgm similarity if available, fallback to ilike
  // Supabase does not support .similarity directly, so use SQL query
  const { data, error } = await supabase.rpc('fuzzy_search_game_keys', { search_term: search });
  if (error || !data) {
    // fallback to ilike
    const fallback = await supabase
      .from('game_keys')
      .select('*')
      .ilike('title', `%${search}%`);
    if (fallback.error) throw fallback.error;
    return fallback.data;
  }
  return data;
}


async function incrementLikeCountById(id) {
  // You need to create a Postgres function 'increment_like_count' for this to work
  const { data, error } = await supabase.rpc('increment_like_count', { row_id: id });
  if (error) throw error;
  return data;
}

module.exports = { getAllGameKeys, searchGameKeys, incrementLikeCountById };
