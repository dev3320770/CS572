const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://localhost", { useNewUrlParser: true });

app.use(doConnect);

function doConnect(req, res, next) {
    client.connect((err) => {
        if (err) {
            throw err
        } else {
            console.log('Successfully connected to MongoDB')
            const db = client.db('week2');
            const collection = db.collection('restaurants');
            client.close;
            req.coll = collection;
            return next();
        }
    })
}
app.get("/question1", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({}).toArray();
    res.send(results);
})
app.get("/question2", async (req, res) => {
    const collection = req.coll;
    const project = {"restaurant_id":1,"name":1,"district:":1,"cuisine":1};
    const results = await collection.find({}).project(project).toArray();
    res.send(results);
})
app.get("/question3", async (req, res) => {
    const collection = req.coll;
    const project = {_id:0,"restaurant_id":1,"name":1,"district:":1,"cuisine":1};
    const results = await collection.find({}).project(project).toArray();
    res.send(results);
})
app.get("/question4", async (req, res) => {
    const collection = req.coll;
    const project = {_id:0,"restaurant_id":1,"name":1,"district:":1,"address.zipcode":1};
    const results = await collection.find({}).project(project).toArray();
    res.send(results);
})
app.get("/question5", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({district:"Bronx"}).toArray();
    res.send(results);
})
app.get("/question6", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({district:"Bronx"}).limit(5).toArray();
    res.send(results);
})
app.get("/question7", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({district:"Bronx"}).skip(5).limit(5).toArray();
    res.send(results);
})
app.get("/question8", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({"address.coord":{"$lt":-65.754168}}).toArray();
    res.send(results);
})
app.get("/question9", async (req, res) => {
    const collection = req.coll;
    const query = {$and: [{"cuisine":{$ne:"American "}},{"grades.score":{$gt:70}},{"address.coord":{$lt:-65.754168}}]}
    const results = await collection.find(query).toArray();
    res.send(results);
})
app.get("/question10", async (req, res) => {
    const collection = req.coll;
    const query = {name:{$regex:"^Wil"}}
    const project = {_id:0,"address":0,"grades":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question11", async (req, res) => {
    const collection = req.coll;
    const query = {name:{$regex:"ces$"}}
    const project = {_id:0,"address":0,"grades":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question12", async (req, res) => {
    const collection = req.coll;
    const query = {name:{$regex:"Reg"}}
    const project = {_id:0,"address":0,"grades":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question13", async (req, res) => {
    const collection = req.coll;
    const query = {"district":"Bronx", "cuisine":{$in: ["American ", "Chinese"]}}
    
    const results = await collection.find(query).toArray();
    res.send(results);
})
app.get("/question14", async (req, res) => {
    const collection = req.coll;
    const query = { "district":{$in: ["Queens", "Bronx", "Island","Brooklyn"]}}
    const project = {_id:0,"address":0,"grades":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question15", async (req, res) => {
    const collection = req.coll;
    const query = { "district":{$not:{$nin: ["Queens", "Bronx", "Island","Brooklyn"]}}}
    const project = {_id:0,"address":0,"grades":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question16", async (req, res) => {
    const collection = req.coll;
    const query = { "grades.score":{$not:{$gt:10}}}
    const project = {_id:0,"address":0,"grades":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question17", async (req, res) => {
    const collection = req.coll;
    const query = { "address.coord.1":{$gt:42, $lt:52}}
    const project = {_id:0,"grades":0,"cuisine":0,"district":0};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})
app.get("/question18", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find().sort({"name":1}).toArray();
    res.send(results);
})
app.get("/question19", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find().sort({"name":-1}).toArray();
    res.send(results);
})
app.get("/question20", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find().sort({"cuisine":1, "district":-1}).toArray();
    res.send(results);
})
app.get("/question21", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({"address.street":{$exists:true}}).toArray();
    res.send(results);
})
app.get("/question22", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({"address.coord":{$type:"double"}}).toArray();
    res.send(results);
})

app.get("/question23", async (req, res) => {
    const collection = req.coll;
    const query = {name:{$regex:"^Mad"}}
    const project = {_id:0,"address.coord":1,"name":1, "district":1, "cuisine":1};
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
})

app.listen(3000, () => console.log('Listening on port 3000'));