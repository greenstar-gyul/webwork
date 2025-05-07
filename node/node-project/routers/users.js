const express = require("express");
const router = express.Router();
// const query = require('../mysql');

// 로그인 정보
router.get('/info', (req, res, next) => {
  res.send(`세션 계정: ${req.session.email}`);
})

// 로그인
router.post('/login', (req, res, next) => {
  const user = req.body;
  req.session.email = user.email;
  req.session.pw = user.pw;
  req.session.save((err) => {
    if (err)
      res.send({err: err, code: "fail"});
    else
      res.send({ eamil: req.session.email, code: req.session.email });
  });
});

// 로그아웃
router.post('/logout', (req, res, next) => {
  req.session.destroy();
  res.send('로그아웃 완료');
});

module.exports = router;
