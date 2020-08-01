const resolveModalData = async ({
    id,
    productName: name,
    productDecription: description,
    productPrice: price,
    productCover: cover
} = {}) => {
    const form = document.getElementById('createOrUpdateProduct');
    const createOrUpdateTitle = document.getElementById('createOrUpdateTitle');
    const addOrUpdateProduct = document.getElementById('addOrUpdateProduct');
    const identifierInput = document.getElementById('identifier');

    const {
        productName,
        productPrice,
        productDecription,
        productCover
    } = form;

    if (!id) {
        productName.value = null;
        productPrice.value = null;
        productDecription.value = null;
        productCover.value = null;

        createOrUpdateTitle.innerText = 'Novo Produto';
        addOrUpdateProduct.innerText = 'Adicionar produto';
        identifierInput.value = null;

        return;
    }

    productName.value = name;
    productPrice.value = price;
    productDecription.value = description;
    productCover.value = cover;

    createOrUpdateTitle.innerText = 'Atualizar Produto';
    addOrUpdateProduct.innerText = 'Atualizar';
    identifierInput.value = id;

    return;
}

const clearError = (input) => {
    const element = document.getElementById(input);
    element.style.display = 'none';
    return;
}

const openAddOrEditProductModal = async (params) => {
    const modal = document.getElementById("addOrUpdateProductModal");
    const closeButton = document.getElementsByClassName("close")[0];

    await resolveModalData({
        ...params
    });


    modal.style.display = 'block';

    document.getElementById('product-price').focus();
    document.getElementById('product-price').blur();

    closeButton.onclick = async () => {
        modal.style.display = 'none';
        await resolveModalData();
    }

    window.onclick = async (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            await resolveModalData();
        }
    }
}