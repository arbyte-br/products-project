const fn = () => {
    const username = 'richardpassos01'
    axios.get('https://api.github.com/users/' + username)
        .then(function (response) {
            console.log(response.data); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
        });
}