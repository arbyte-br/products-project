const createDiv = ({
    id,
    title,
    description,
    value,
    cover
}) => {
    const div =
        `<div id='product-${id}'>
            <button id='edit-${id}' onclick='editProduct("edit-${id}")'>Editar${id}</button>
            <button id='delete-${id}' onclick='deleteProduct("product-${id}")'>Deletar${id}</button>
        </div>`;

    return div;
}

const editProduct = (id) => {
    const elem = document.getElementById(id);
    elem.innerHTML = 'editado';
}

const deleteProduct = (id) => {
    const elem = document.getElementById(id);
    elem.remove();
}
