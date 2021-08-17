Basic Structure: 
    //Make a GET Request
    axios({
        method: 'get',
        url: 'https://api.github.com/users/hacktivist123',
    });

    // Make a Post Request
    axios({
        method: 'post',
        url: '/login',
        data: {
            firstName: 'shedrack',
            lastName: 'akintayo'
        }
    });

SHORTHAND Structure:
    // Make a GET request with a shorthand method
    axios.get('https://api.github.com/users/hacktivist123');

    // Make a Post Request with a shorthand method
    axios.post('/signup', {
        firstName: 'shedrack',
        lastName: 'akintayo'
    });

Multiple request with AXIOS.ALL():
    axios.all([
    axios.get('https://api.github.com/users/hacktivist123'),
    axios.get('https://api.github.com/users/adenekan41')
    ])
    .then(response => {
    console.log('Date created: ', response[0].data.created_at);
    console.log('Date created: ', response[1].data.created_at);
    });
