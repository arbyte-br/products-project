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
        productCove: productCover.value
    }

    console.log(inputsValues)


}

loadProducts();