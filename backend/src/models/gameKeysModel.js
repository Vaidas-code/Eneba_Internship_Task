const supabase = require('../config/supabase');

async function getAllGameKeys() {
  const { data, error } = await supabase.from('game_keys').select('*');
  if (error) throw error;
  return data;
}

async function searchGameKeys(search) {
  const { data, error } = await supabase.rpc('fuzzy_search_game_keys', { search_term: search });
  if (error || !data) {
    const fallback = await supabase
      .from('game_keys')
      .select('*')
      .ilike('title', `%${search}%`);
    if (fallback.error) throw fallback.error;
    return fallback.data;
  }
  return data;
}

module.exports = { getAllGameKeys, searchGameKeys };
