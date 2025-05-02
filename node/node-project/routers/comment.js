const express = require("express");
const router = express.Router();
const query = require('../mysql');

router.get("/:bid", async (req, res) => {
  try {
    const bid = req.params.bid;
    const result = await query.commentQuery("selectList", bid);
    res.send(result);
  }
  catch(err) {
    res.send(err);
  }
});

router.post("", async (req, res) => { 
  try {
    const result = await query.commentQuery("insertComment", req.body);
    res.send('추가 완료'); 
  }
  catch(err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query.commentQuery('deleteComment', id);
    res.send('삭제 완료');
  }
  catch(err) {
    res.send(err);
  }
});

module.exports = router;
