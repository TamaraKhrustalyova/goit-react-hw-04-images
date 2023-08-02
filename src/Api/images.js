import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '37157085-2fd193525cfc932d78d0f680d';

export const getImagesByQuery = async (query, page) => {
    const {data} = await axios(`?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
    return data;
}