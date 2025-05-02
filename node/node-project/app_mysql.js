const express = require('express');
const cors = require('cors');

require("dotenv").config({path: "./mysql/.env"});
// express 인스턴스 생성
const app = express();
const port = 3000;
const url = `http://localhost:${port}`;

// cors
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const morgan = require('morgan');
app.use(morgan('[:date[web]][:method][:remote-addr][:remote-user][:url]'));

app.get("/", (req, res) => {
  const ip = req.ip;
  res.send(`안녕하세요. Your IP Adress: >> ${ip} <<`);
})

app.use('/customer', require('./routers/customer'));
app.use('/board', require('./routers/board'));
app.use('/comment', require('./routers/comment'));

app.listen(port, () => {
  console.log(`${url}에서 서버가 실행됨`);
});