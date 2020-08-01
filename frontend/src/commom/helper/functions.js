const createDiv = ({
    id,
    productName,
    productDecription,
    productPrice,
    productCover
}) => {
    const div =
        `<div class="product-item" id='product-${id}'>
                <div class="product-image">
                    <div class="container">
                        <img 
                            class="image"
                            name="productCover"
                            src="${productCover}"
                            alt="product-image">
                    </div>
                </div>
                <div class="product-description">
                    <div class="info-container">
                        <span 
                            name="productName"
                            class="title">
                            ${productName}
                        </span>
                        <span
                            name="productDecription"
                            class="description">
                            ${productDecription}
                        </span>
                        <div class="price">
                            <span class="currency">R$</span>
                            <span
                                class="value"
                                name="productPrice">
                                ${productPrice}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product-actions">
                    <div class="items">
                        <button id='edit-${id}' onclick='editProduct(${id})' class="icons"><i
                                style='font-size:14px' class='far'>&#xf044;</i></button>
                        <button id='delete-${id}' onclick='removeProduct("product-${id}")' class="icons"><i
                                style='font-size:14px' class='far'>&#xf2ed;</i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    return div;
}

const editProduct = async (id) => {
    try {
        const inputsValues = {
            id,
            productName: 'teste',
            productPrice: 20.00,
            productDecription: 'hasusa',
            productCategoryId: 2,
            productCover: 'http'
        }

        await updateProduct(inputsValues);

        console.log('deu bom')
    } catch (error) {
        console.log(error)
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