import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.port || 3000;
const environment = process.env.ENVIRONMENT || 'sandbox';
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const endpoint_url =environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com'


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
        .then(json => { return json.access_token; })
    
}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
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


app.post('/complete_order', (req, res) => {
    get_access_token()
        .then(access_token => {
            fetch(endpoint_url + '/v2/checkout/orders/' + req.body.order_id + '/' + req.body.intent, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}` }
            })
            .then(res => res.json())
            .then(json => { console.log(json);  res.send(json); }) //Send minimal data to client
        })
    .catch(err => { console.log(err); res.status(500).send(err) })
});