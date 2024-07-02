
const express = require("express");
const router = express.Router();
const transactions = require("../model/transactions")

router.get('/', async function(req,res){
  response = await transactions.getAllTransactions();
  res.send({data:response});
});

module.exports = router;