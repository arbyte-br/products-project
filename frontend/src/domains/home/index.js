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

const createOrUpdateProduct = async () => {
    try {
        const form = document.getElementById('createOrUpdateProduct');
        const {
            productName,
            productPrice,
            productDecription,
            productCategoryId,
            productCover
        } = form;

        const inputsValues = {
            productName: productName.value,
            productPrice: productPrice.value,
            productDecription: productDecription.value,
            productCategoryId: productCategoryId.value,
            productCover: productCover.value
        }

        await createProducts(inputsValues);

        alert('deu bom');

    } catch (error) {
        alert('deu ruim');
    }
}

loadProducts();