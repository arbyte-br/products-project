const validFormFields = async ({
    productName,
    productPrice,
    productDecription,
    productCover
}) => {
    const errors = [];

    try {
        await axios.get(`https://cors-anywhere.herokuapp.com/${productCover}`, {
            responseType: 'arraybuffer'
        });
    } catch (error) {
        errors.push({
            field: 'productCoverError',
            message: '* URL inválida'
        });
    }

    const params = [{
            value: productName,
            field: 'productNameError',
            description: 'O nome do produto'
        },
        {
            value: productPrice,
            field: 'productPriceError',
            description: 'O preço'
        },
        {
            value: productDecription,
            field: 'productDecriptionError',
            description: 'A descrição do produto'
        }
    ];


    params.forEach(({
        value,
        field,
        description
    }) => {
        if (!value) {
            const customError = {
                message: `* ${description} é obrigatório`,
                field
            };

            errors.push(customError);
            return;
        }

        if (value.length < 5 || value.length > 300) {
            const customError = {
                message: `* O valor inserido é inválido`,
                field
            };

            errors.push(customError);

            return;
        }
    });

    if (errors.length) {
        throw errors;
    }

    return;

}