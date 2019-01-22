const express = require("express");
const crypto = require("crypto");
const aes256 = require("aes256");
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://admin:admin123@ds145289.mlab.com:45289/library_mum_cs572',{useNewUrlParser:true});

const app = express();

app.set ("port", process.env.PORT || 3000);
const port = app.get("port");

app.use(function (req,res,next){
console.log("hey");

function doConnect() {
    client.connect((err) => {
       if(err) { 
           throw err
       } else {
           console.log('Successfully connected to MongoDB')
           const db = client.db('library_mum_cs572');
           const collection = db.collection('homework07'); 
           client.close;
           
           req.result = collection;
           return next();
       }
   })
}
doConnect()

});

app.get("/secret",(req,res)=>{
const collection = req.result;
    collection.findOne({}, function(err, doc){
        // client.close;
        const decipher = crypto.createDecipher("aes256", "asaadsaad");
        const decrypted = decipher.update(doc.message, 'hex', 'utf8') + decipher.final('utf8');
        res.send(decrypted);

        });

});

app.listen(port, ()=> console.log(`Listening on port ${port}`));