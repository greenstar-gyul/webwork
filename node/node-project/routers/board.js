const express = require("express");
const router = express.Router();
const query = require('../mysql');

router.get("", async (req, res) => {
  try {
    const result = await query.boardQuery("selectList", null);
    res.send(result);
  }
  catch(err) {
    res.send(err);
  }
});

router.post("", async (req, res) => { 
  try {
    const result = await query.boardQuery("insertBoard", req.body);
    res.send('추가 완료'); 
  }
  catch(err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query.boardQuery("selectById", id);
    res.send(result); 
  }
  catch(err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => { 
  const id = req.params.id;
  const board = req.body;
  const data = [board.title, board.writer, board.content, id];
  try {
    const result = await query.boardQuery('updateBoard', data);
    res.send('업데이트 완료');
  }
  catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => { 
  const id = req.params.id;
  try {
    const result = await query.boardQuery('deleteBoard', id);
    res.send('삭제 완료');
  }
  catch(err) {
    res.send(err);
  }
});

module.exports = router;
