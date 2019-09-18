# APIv3-typescript-library
SendinBlue's API v3 TypeScript Library

SendinBlue's API exposes the entire SendinBlue features via a standardized programmatic interface. Please refer to the full [documentation](https://developers.sendinblue.com) to learn more.

This is the wrapper for the API. It implements all the features of the API v3. It supports promises.

SendinBlue's API matches the [OpenAPI v2 definition](https://www.openapis.org/). The specification can be downloaded [here](https://api.sendinblue.com/v3/swagger_definition.yml).

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

Then install it via:

```shell
npm install sib-api-typescript-node-v3-sdk --save
```

## Getting Started

Once you have [installed](#installation) the node module in your project, you can execute the following sample code JS code :

```javascript
// For getAccount API

var SibApiV3Sdk = require('sib-api-typescript-node-v3-sdk');

var apiInstance = new SibApiV3Sdk.AccountApi()

// Configure API key authorization: api-key

var apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"

// Configure API key authorization: partner-key

var partnerKey = apiInstance.authentications['partnerKey'];
partnerKey.apiKey = "YOUR API KEY"

apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

```javascript
//For getLists API

var SibApiV3Sdk = require('sib-api-typescript-node-v3-sdk');

var apiInstance = new SibApiV3Sdk.ContactsApi()

// Configure API key authorization: apiKey

var apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"

// Configure API key authorization: partnerKey

var partnerKey = apiInstance.authentications['partnerKey'];
partnerKey.apiKey = "YOUR API KEY"

var opts = { 
  'limit': 10, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

apiInstance.getLists(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
  api.getAttributes().then(function(data) {
    console.log('API called successfully. Returned data: ' + data);
  }, function(error) {
    console.error(error);
  });

}, function(error) {
  console.error(error);
});


```


For more examples, refer the https://github.com/sendinblue/APIv3-nodejs-library#documentation-for-api-endpoints

