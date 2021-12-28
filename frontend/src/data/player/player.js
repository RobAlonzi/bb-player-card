import api from '@/data';

export async function getPlayerVitals(id) {
  const response = await api.get(`/players/${id}`)
  return response.data;
}

export async function getPlayerStats(id) {
  const response = await api.get(`/players/${id}/stats`)
  return response.data;
}