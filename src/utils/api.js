const axios = require('axios').default;
const mercadoLivreApiUrl = 'http://localhost:3001/mercadolivre';
const buscapeApiUrl = 'http://localhost:3001/buscape';

const fetchMercadoLivreApi = async (categoryId, payload) => {
  const { data } = await axios.post(`${mercadoLivreApiUrl}/${categoryId}`, payload);
  return data;
}

const fetchBuscapeApi = async (payload) => {
  const { data } = await axios.post(`${buscapeApiUrl}`, payload);
  return data;
}

module.exports = {
  fetchBuscapeApi,
  fetchMercadoLivreApi,
}