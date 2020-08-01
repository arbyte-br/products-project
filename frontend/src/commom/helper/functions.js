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
                        <img class="image"
                            src="${productCover}"
                            alt="product-image">
                    </div>
                </div>
                <div class="product-description">
                    <div class="info-container">
                        <span class="title">${productName}</span>
                        <span class="description">${productDecription}</span>
                        <div class="price">
                            <span class="currency">R$</span>
                            <span class="value">${productPrice}</span>
                        </div>
                    </div>
                </div>
                <div class="product-actions">
                    <div class="items">
                        <button id='edit-${id}' onclick='editProduct("edit-${id}")' class="icons"><i
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

const editProduct = (id) => {
    const elem = document.getElementById(id);
    elem.innerHTML = 'editado';
}

const removeProduct = async (id) => {
    try {
        const [, resolvedId] = id.split('-');
        await deleteProducts(resolvedId);

        const elem = document.getElementById(id);
        elem.remove();
    } catch (error) {
        alert('Deu ruim');
    }

}