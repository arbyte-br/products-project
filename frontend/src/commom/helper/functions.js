const createDiv = ({
    id,
    nome: title,
    descricao: description,
    preco: value,
    cover
}) => {
    const div =
        `<div class="product-item" id='product-${id}'>
                <div class="product-image">
                    <div class="container">
                        <img class="image"
                            src="https://apucarana.cidadecancao.com/media/catalog/product/cache/1/image/420x565/9df78eab33525d08d6e5fb8d27136e95/f/1/f131c9be04e7a59a2d8426d40fa48f8825595f.png_2.png"
                            alt="product-image">
                    </div>
                </div>
                <div class="product-description">
                    <div class="info-container">
                        <span class="title">${title}</span>
                        <span class="description">${description}</span>
                        <div class="price">
                            <span class="currency">R$</span>
                            <span class="value">${value}</span>
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