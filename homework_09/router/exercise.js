const express = require("express");
const router = express.Router();

router.get("/question1", async (req, res) => {
    const collection = req.dbcoll;
    const data = await collection.aggregate([
        { $match: { 'state': 'IA' } },
        { $group: { '_id': '$state', 'zipcodes': { $addToSet: '$_id' } } },
        { $project: { '_id': 0, 'state': '$_id', 'zipcodes': 1 } }

    ]).toArray();
    res.send(data);
})
router.get("/question2", async (req, res) => {
    const collection = req.dbcoll;
    const data = await collection.aggregate([
        { $match: { 'pop': { $gt: 1000 } } },
    ]).toArray();
    res.send(data);
})
router.get("/question3", async (req, res) => {
    const collection = req.dbcoll;
    const data = await collection.aggregate([
        { $group: { '_id': { 'state': '$state', 'city': '$city' }, 'zip': { $sum: 1 } } },
        { $match: { 'zip': { $gt: 1 } } },
        { $sort: { 'state': 1, 'city': 1 } }
    ]).toArray();
    res.send(data);
})
router.get("/question4", async (req, res) => {
    const collection = req.dbcoll;
    const data = await collection.aggregate([
        { $group: { '_id': { 'state': "$state", 'city': "$city" }, 'population': { $sum: "$pop" } } },
        { $sort: { 'population': 1 } },
        { $group: { '_id': "$_id.state", 'city': { $first: "$_id.city" }, 'population': { $first: "$population" } } },
        { $project: { '_id': 0, 'state': "$_id", 'city': 1, 'population': 1 } }
       

    ]).toArray();
    res.send(data);
})
module.exports = router;