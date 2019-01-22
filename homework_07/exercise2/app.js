const express = require("express");
const crypto = require("crypto");
const aes256 = require("aes256");
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,{useNewUrlParser:true});

const app = express();

app.set ("port", process.env.PORT || 3000);
const port = app.get("port");

app.use(doConnect);

app.get("/secret" ,(req,res)=>{
const db = req.result;
    db.collection("homework07").findOne({}, function(err, doc){
        // client.close;
        const decipher = crypto.createDecipher("aes256", "asaadsaad");
        const decrypted = decipher.update(doc.message, 'hex', 'utf8') + decipher.final('utf8');
        res.send(decrypted);

        });

});

function doConnect(req,res,next) {
    client.connect((err) => {
       if(err) { 
           throw err
       } else {
           console.log('Successfully connected to MongoDB')
           const db = client.db('library_mum_cs572');
        //    const collection = db.collection('homework07'); 
           client.close;
           
           req.result = db;
           return next();
       }
   })
}

app.listen(port, ()=> console.log(`Listening on port ${port}`));