const express = require('express');
const cors = require('cors');
const app = express();
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv')

dotenv.config()
app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI
const client = new MongoClient(uri);

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db= client.db('missionSix');
    const collection=db.collection('messageLogs');

    app.post('/logmessage',(req,res) => {
    
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
    })

  })
  .catch(error => console.error(error))

app.listen(3131);