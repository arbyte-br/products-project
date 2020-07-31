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

loadProducts();