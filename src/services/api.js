import axios from 'axios';

const unsplashInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    per_page: 30,
    client_id: '_R4aQuJ40OU1qnBtzE5IaPSM__8d7icgebkN2VAJd-4',
    orientation: 'portrait',
  },
});

export const getImagesByQuery = async (query, page) =>
  await unsplashInstance.get('search/photos', { params: { query, page } });
