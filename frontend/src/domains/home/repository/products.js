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

const createProduct = async ({
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

const updateProduct = async ({
    productName,
    productPrice,
    productDecription,
    productCategoryId,
    productCover,
    id
}) => {
    const URL = `${defaultURL}/${id}`;

    return axios.put(URL, {
        id,
        productName,
        productPrice,
        productDecription,
        productCategoryId,
        productCover
    });
}