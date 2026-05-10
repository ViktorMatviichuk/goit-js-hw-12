import axios from 'axios';

const API_KEY = '55707512-2305e15ffb70fd606127599a4';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error.message);
    return { hits: [], totalHits: 0 };
  }
}
