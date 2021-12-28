import api from '@/data';

export async function searchForPlayer(input) {
  const response = await api.get(`/search/players/${input}`)
  return response.data;
}