const BASE_URL = 'http://10.0.0.105/api_multiplicadores/';
const API_URL = BASE_URL + 'api/';

const getData = async (endpoint) => {
    let result = await fetch(API_URL + endpoint).then((res) => res.json());
    return result;
}

export const searchCuit = async (options = '') => {
    return getData('search.php?cuit=' + options);
}

export const searchQR = async (string_qr) => {
    return getData('search.php?qr=' + string_qr);
}

export const getCategories = async () => {
    return getData('category');
}

export const getHomeItems = async () => {
    return getData('home');
}