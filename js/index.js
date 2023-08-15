function get_access_token() {
    const auth = `${client_id}:$(client_secret)`
    const data = 'grant_type=client_credentials'
    return fetch(endpoint_url + '/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic${Buffer.from(auth).toString('base64')}`
        },
        body: daya
    })
        .then(res => res.json())
        .   .then(json => {return json.access_token: })
    
}

app.listen(port, () => {
    console.log(`Server listening at http://local host:${port}`)
})



app.post('/create_order', (req, res) => {
    get_access_token()
        .then(access_token => {
        let order_data_json = {
            'intent': req.body.intent.toUpperCase(),
            'purchase_units': [{
                'amount': {
                'currency_code': 'USD',
                'value': '100.00'
            }
        }]
    },
        };
        const data = JSON.stringify(order_data_json)
       
        fetch(endpoint_url + 'v2/checkout/orders', { //https://developer.paypal.com/docs/api/orders/v2/#orders_create
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
                'PayPal-Request-Id': generate_random_uuid() //7b92603e-77ed-4896-8e78-5dea2050476a//
                
        },
            body: data
        })
            .then(res => res.json())
            .then(json => { res.send(json); }) //Send minimal data to client
})
    .catch(err => { console.log(err); res.status(500).send(err) })
});