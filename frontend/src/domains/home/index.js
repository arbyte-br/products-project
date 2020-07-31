const loadProducts = async () => {
    const {
        data
    } = await listProducts();

    const mainContainer = document.getElementById('main-container');

    data.forEach(item => {
        const product = createDiv(item);

        mainContainer.insertAdjacentHTML('beforeend', product);
    });

}

const createOrUpdateProduct = () => {
    const form = document.getElementById('createOrUpdateProduct');
    const productName = form.elements[0].value;
    const productPrice = form.elements[1].value;
    const productDecription = form.elements[2].value;
    const productCategoryId = form.elements[3].value;
    const productConver = form.elements[4].value;

}

loadProducts();