const express = require("express");
const router = express.Router();



router.get("/",async (req, res)=>{
    const collection = req.collec;
    const searchData = req.body;
    if(!req.body || !req.body.category){
        return res.status(400).send("Category required name is optional")
    }
    const searchFromData = await collection.find(searchData).toArray();

   const log = searchFromData[0].location[0];
   const lat = searchFromData[0].location[1];

    const query = {location:{$near:{$geometry:{coordinates:[log,lat]}}}};
    const results = await collection.find(query).toArray();
    res.send(results);

})
router.post("/",async (req,res)=>{
    const data = req.body;
    const collection = req.collec;
    collection.insertOne(data);
    res.send("Success");


})

module.exports=  router;