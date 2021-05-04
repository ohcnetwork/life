import axios from 'axios';

export const fetchLocation = (address) => {
  return axios.get(`${process.env.NEXT_PUBLIC_GOOGLE_GEOCODE_URL}?address=${encodeURI(address)}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
}
