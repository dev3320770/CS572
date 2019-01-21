var express = require('express');
var router = express.Router();
var gradesDemo = require("../model/data");
var bodyParser = require("body-parser");
// var urlencodedParser = bodyParser.urlencoded({extended:false});
var jsonParser = bodyParser.json();
var validate = require('../middleware/validate');
var app = express();
app.use("validate", validate);

var grades = gradesDemo;

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const results = await grades;
  if (!results) return next("Error");
  res.send(results);
});

router.get("/:id", async (req, res, next) => {
  const results = await grades.find(g => g.id === parseInt(req.params.id));
  console.log(results);
  if (!results) return next("error");
  res.send(results);
});

router.post("/", validate, jsonParser, (req, res) => {
  const id = {
    id: grades.length + 1
  };
  const newData = req.body;
  const idData = id;
  const grade = { ...idData,
    ...newData
  };
  const d = grades.push(grade);
  res.send("success");

});

router.delete("/:id", async (req, res, next) => {
  const index = await grades.findIndex(g => g.id === parseInt(req.params.id));
  if (!index || index === -1) return next("error");
  const results = grades.splice(index, 1);
  res.send(results);

});

router.put("/:id", validate, async (req, res, next) => {
  const index = await grades.findIndex(g => g.id === parseInt(req.params.id));
  // const newData = {
  //   name: req.body.name,
  //   course: req.body.course,
  //   grade: req.body.grade
  // }
  if (!index || index === -1) return next("error");
  const id = {
    id: index + 1
  };
  const newData = req.body;
  const idData = id;
  const grade = { ...idData,
    ...newData
  };

  grades[index] = grade;
  res.send(grades[index]);

});

module.exports = router;