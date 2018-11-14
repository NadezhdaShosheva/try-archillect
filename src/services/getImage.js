import axios from 'axios';

const BASE_URL = 'https://archillect-api.now.sh/visuals';

export default async (imageId) => {
  const { data } = await axios.get(`${BASE_URL}/${imageId}`);
  return data.imageSource ? { url: data.imageSource } : { error: data };
};
