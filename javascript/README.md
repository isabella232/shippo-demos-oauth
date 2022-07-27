## Shippo OAuth Demo

This repository contains a simple demo to show how to implement Shippo OAuth in your application using Javascript.

## Getting Started

To get started, you will need to create a Shippo account and obtain an API credentials.
Please reach out to partnerships@goshippo.com with the following information:

* **Company’s Name** : This is presented to the user during the OAuth flow when they connect their Shippo account to
  your platform
* **Callback URL** : The URL vendors are redirected to after they connect their Shippo account. 
* **Contact Email** : Your email address
* **Brief description of use case**

Please find full instructions here:  [Shippo OAuth](https://goshippo.com/docs/oauth)

For this demo you can use this callback URL:  `http://localhost:8080/oauth/callback`

## Installation

To clone the repository, run the following command:

```bash
    $ git clone https://github.com/goshippo/shippo-demos-oauth.git 
    $ cd shippo-demos-oauth/javascript
    $ yarn install   (or npm install)
         
```

## Modify the configuration to run the demo

Copy content of .sample.env to .env

```bash
    $ cp  .sample.env .env
    $ nano .env
```
Place your Client ID and Client Secret in the .env file.

In ``public/index.html`` you will need to replace ```<CLIENT_ID>``` with your ClientID here:
```
<script>
    // PLACE YOUR SHIPPO CLIENT_ID HERE
    const client_id = '<CLIENT_ID>';
    ...
</script>
```


## Run the Demo

```bash
$ yarn start (or npm start)
```


Visit `http://localhost:8080` in your browser, and
click the button - `Login with Shippo Credentials` to connect your Shippo account.

