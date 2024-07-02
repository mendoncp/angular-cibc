
const express = require("express");
const router = express.Router();

router.get('/', function(req,res){
    res.send('HELLO WORLD')
  });

router.get("/home", function (req, res) {
  res.send("Test home page");
});


router.get("/check", function (req, res) {
  res.send("Check this Router");
});

module.exports = router