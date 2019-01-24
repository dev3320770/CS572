const express = require("express");
const app = express();
const exercise = require("./router/exercise");
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/cs572?retryWrites=true`,{useNewUrlParser:true});
app.use(express.json());
app.set("port", process.env.PORT || 3000);
const port =app.get("port");

app.use(function(req,res,next){
    
    client.connect((err)=>{
        const db = client.db("cs572");
        const collection = db.collection("zipCodes");
        // client.close();
        req.dbcoll = collection;
        return next();

    })
  
})

app.use("/", exercise);
app.listen(port, ()=> console.log(`Listening to port ${port}`));