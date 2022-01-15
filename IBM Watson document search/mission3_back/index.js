//usual backend setup
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function (req,res) {
  res.send('Hello World!')
})

app.post('/query', function(req,res) {
  console.log(req.body.query);
  
  const punc_removed = removepunc(req.body.query);

//IBM discovery code
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
authenticator: new IamAuthenticator({ apikey: process.env.WATSON_KEY }),
serviceUrl: process.env.SERVICE_URL,
version: '2020-08-30'
});

const queryParams = {
    environmentId: process.env.ENV_ID,
    collectionId: process.env.COLLECTION_ID,
    passages: true,
    naturalLanguageQuery:punc_removed//req.body.query 'how many electric vehicles will you cover in one insurance period?'
  };
  
  discovery.query(queryParams)
    .then(queryResponse => {
      res.send(queryResponse.result.passages)//(JSON.stringify(queryResponse, null, 2));
    })
    
    .catch(err => {
      console.log('error:', err);
    });
//res.send(queryResponse.result.passages)

})

function removepunc(word){
  let wordstr=word;
  wordstr= wordstr.replace(/[^a-zA-Z ]/g," ");
  

  while(wordstr.charAt(0) === ' ')
  {wordstr = wordstr.substring(1);}
  return wordstr;
}


app.listen(1337);
module.exports = removepunc;