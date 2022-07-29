require('dotenv').config();
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const axios = require('axios');
const shippo = require('shippo')


const app = new Koa();

//get client id and secret from .env file
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
console.log('opening port 8080... \n');
console.log('Open your browser and go to http://localhost:8080');
//serve the index.html file
const main = serve(path.join(__dirname + '/public'));

//get the access token
const oauth = async ctx => {
    const requestToken = ctx.request.query.code;
    console.log('authorization code:', requestToken);

    if(!clientID || !clientSecret) {
        console.log('clientID or clientSecret is missing. Please set the CLIENT_ID and CLIENT_SECRET environment variables.');
        return;
    }

    //get the access token by exchanging the authorization code
    const response = await axios.post('https://goshippo.com/oauth/access_token', {
        client_id: clientID,
        client_secret: clientSecret,
        code: requestToken,
        grant_type: 'authorization_code'
    });


    const accessToken = response.data.access_token;
    console.log('access token:', accessToken);


    // Initialize Shippo with your Access Token
    const shippoClient = shippo({'oauthToken': accessToken});

    //make a request to get a list of all addresses for the authenticated user
    const addressList = await shippoClient.address.list();
    console.log('Address List :', addressList);


    ctx.response.redirect(`/accessToken.html?accessToken=${accessToken}`);
};

app.use(main);
app.use(route.get('/oauth/callback', oauth));

app.listen(8080);
