const express = require("express");
const router = express.Router();
const query = require('../mysql');

router.get("", async (req, res) => {
  try {
    const result = await query.customerQuery("selectList", null);
    res.send(result);
  }
  catch(err) {
    res.send(err);
  }
});

router.post("", async (req, res) => { 
  try {
    const result = await query.customerQuery("insertCstm", req.body);
    res.send('추가 완료'); 
  }
  catch(err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query.customerQuery("selectById", id);
    res.send(result); 
  }
  catch(err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => { 
  const id = req.params.id;
  const customer = req.body;
  const data = [customer.name, customer.email, customer.phone, customer.address, id];
  try {
    const result = await query.customerQuery('updateCstm', data);
    res.send('업데이트 완료');
  }
  catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query.customerQuery('deleteCstm', id);
    res.send('삭제 완료');
  }
  catch(err) {
    res.send(err);
  }
});

module.exports = router;
