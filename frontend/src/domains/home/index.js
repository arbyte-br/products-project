const mockData = [
    {
        id: 1,
        title: 'teste 1',
        description: 'descricao do teste 1',
        value: 120.00,
        cover: 'https://img2.gratispng.com/20171220/ygq/coca-cola-bottle-png-image-5a3ac111143367.55266218151379995308277163.jpg'
    },
    {
        id: 2,
        title: 'teste 2',
        description: 'descricao do teste 2',
        value: 100.00,
        cover: 'https://img2.gratispng.com/20171220/ygq/coca-cola-bottle-png-image-5a3ac111143367.55266218151379995308277163.jpg'
    },
    {
        id: 3,
        title: 'teste 3',
        description: 'descricao do teste 3',
        value: 150.00,
        cover: 'https://img2.gratispng.com/20171220/ygq/coca-cola-bottle-png-image-5a3ac111143367.55266218151379995308277163.jpg'
    },
    {
        id: 4,
        title: 'teste 4',
        description: 'descricao do teste 4',
        value: 150.00,
        cover: 'https://img2.gratispng.com/20171220/ygq/coca-cola-bottle-png-image-5a3ac111143367.55266218151379995308277163.jpg'
    }
];


const loadProducts = () => {
    const mainContainer = document.getElementById('main-container');

    mockData.forEach(item => {
        const product = createDiv(item);

        mainContainer.insertAdjacentHTML('beforeend', product);
    });

}

loadProducts();