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
router.get('/', async (req, res) => {
  try {
    const results = await grades;
  res.send(results);
  } catch (error) {
    res.status(400).send("Error");
  }
});

router.get("/:id", async (req, res) => {
 try {
  const results = await grades.find(g => g.id === parseInt(req.params.id) );
  if(!results){
    return res.status(404).send("Not Found");
  }
  res.send(results);
 } catch (error) {
   res.status(400).send("error");
 }
});

router.post("/", validate ,jsonParser,  (req, res) => {

  try {
    const id = {
      id: grades.length + 1
    };
    const newData = req.body;
    const idData = id;
    const grade = {...idData , ...newData};
    grades.push(grade);
    res.send("success");
  } catch (error) {
    res.status(400).send("Error");
  }

});

router.delete("/:id", async (req, res) => {
  try {
    const index = await grades.findIndex(g => g.id ===parseInt(req.params.id) );
    if(!index || index === -1){
      return res.status(404).send("Not Found");
    }
    const results = grades.splice(index, 1);
    res.send(results);
  } catch (error) {

    res.status(400).send("Error");
    
  }
  
});

router.put("/:id", validate, async (req, res) => {

  try {
    const index = await grades.findIndex(g => g.id === parseInt(req.params.id) );

    // const newData = {
    //   name: req.body.name,
    //   course: req.body.course,
    //   grade: req.body.grade
    // }
    if(!index || index === -1){
      return res.status(404).send("Not Found");
    }
    const id = {
      id: index + 1
    };
    const newData = req.body;
    const idData = id;
    const grade = {...idData , ...newData};

    grades[index] = grade;
    res.send(grades[index]);
    
  } catch (error) {
    res.status(400).send("error");
  }

})

module.exports = router;