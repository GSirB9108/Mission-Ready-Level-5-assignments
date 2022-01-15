const express = require('express');
const cors = require('cors');
const app = express();
const {MongoClient} = require('mongodb');
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv')
dotenv.config()

const uri = process.env.DB_URI
const client = new MongoClient(uri);

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db= client.db('missionSeven');
    const collection=db.collection('propertyListings');

    /* app.post('/logmessage',(req,res) => {
    
        console.log(req.body);
        
        collection.insertOne({
            name: req.body.name,
            email: req.body.email,
            subject:req.body.subject, 
            message:req.body.message,
        })
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(error => console.error(error))
    }) */
    app.get('/results',(req,res) => {
        const cursor=db.collection('propertyListings').find().toArray()
        .then(results => {
            console.log(results);
            res.send(results)
            //send results to front
        })
        .catch(error => console.error(error));
        
    })

  })
  .catch(error => console.error(error))

app.listen(3131);