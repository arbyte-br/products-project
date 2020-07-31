const defaultURL = 'http://localhost:3000/produtos';

const listProducts = async (id) => {
    const URL = id ? `${defaultURL}/${id}` : defaultURL;

    const products = await axios.get(URL);
    return products;
}

const deleteProducts = async (id) => {
    const URL = `${defaultURL}/${id}`;

    return axios.delete(URL);
}