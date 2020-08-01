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

const createProducts = async ({
    productName,
    productPrice,
    productDecription,
    productCategoryId,
    productCover,
}) => {
    return axios.post(defaultURL, {
        productName,
        productPrice,
        productDecription,
        productCategoryId,
        productCover,
    });
}