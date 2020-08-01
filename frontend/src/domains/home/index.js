$(document).ready(function () {
    $(".ValoresItens").maskMoney({
        prefix: "R$ ",
        decimal: ",",
        thousands: "."
    });
});

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

const callRepositoryToCreateOrUpdate = async (id, inputsValues) => {
    if (id && !isNaN(+id)) {
        return updateProduct({
            id,
            ...inputsValues
        });
    }

    return createProduct(inputsValues);

}

const resolvePrice = async (price) => {
    if (!price) {
        return null;
    }

    const priceWithoutPoint = price.replace(/\./g, "");
    const value = priceWithoutPoint.replace(/\,/g, ".");
    const valueWithouMask = /\d+.\d+/.exec(value)[0].toString();
    return +valueWithouMask;
}

const createOrUpdateProducts = async () => {
    try {
        const form = document.getElementById('createOrUpdateProduct');

        const {
            identifier: {
                value: identifierValue
            },
            productName,
            productPrice,
            productDecription,
            productCover
        } = form;

        const price = await resolvePrice(productPrice.value);

        await validFormFields({
            productName: productName.value,
            productPrice: price,
            productDecription: productDecription.value,
            productCover: productCover.value
        });

        const inputsValues = {
            productName: productName.value,
            productPrice: price,
            productDecription: productDecription.value,
            productCover: productCover.value
        }

        await callRepositoryToCreateOrUpdate(identifierValue, inputsValues);

        alert('deu bom');

    } catch (error) {
        if (error.length) {
            error.forEach(item => {
                const element = document.getElementById(item.field);
                element.innerText = item.message;
                element.style.display = "block";
            });
        }

    }
}

const removeProduct = async (id) => {
    try {
        const [, resolvedId] = id.split('-');
        await deleteProducts(resolvedId);

        const elem = document.getElementById(id);
        elem.remove();

        console.log('Deu Bom')
    } catch (error) {
        alert('Deu ruim');
    }

}

loadProducts();