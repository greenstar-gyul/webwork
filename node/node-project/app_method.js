const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/temp/uploads')
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extname);
    cb(null, basename + '-' + Date.now() + extname)
  }
})

const upload = multer({ storage: storage })

// express 인스턴스 생성
const app = express();
const port = 80;
const url = `http://localhost:${port}`;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let boards = [
  {
    id: 1,
    title: "스택",
    content: "후입선출(or 선입후출)의 자료구조"
  },
  {
    id: 2,
    title: "큐",
    content: "선입선출의 자료구조"
  },
];

// 로그 미들웨어 morgan
const morgan = require('morgan');
app.use(morgan(':date[web] :method :remote-addr :remote-user :url'));

// 라우트 설정
app.get('/download', (req, res) => {
  const filepath = "c:/temp/uploads/haha.txt";
  const downname = 'haha.txt';
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`);
  res.sendFile(filepath);
});

app.post('/profile', upload.single('avatar'), function (req, res) {
  // req.file 은 `avatar` 라는 필드의 파일 정보입니다.
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
  console.log(req.file.size);
  console.log(req.file.filename);
  console.log(req.file.originalname);
  res.send(req.file);
});

app.get('/', (req, res) => {
  res.send('hello');
});

// 전체 조회
app.get('/board', (req, res) => {
  const ip = req.ip;
  res.send(`안녕하세요. Your IP Adress: >> ${ip} <<`);
  // res.send(boards);
});

// 단건 조회
app.get('/board/:id', (req, res) => {
  const id = req.params.id;
  const board = boards.find(e => e.id == id);
  res.send(board);
});

// 등록
app.post('/board', (req, res) => {
  const board = req.body;
  boards.push(board);
  console.log("받은 파라미터: " + board);
  res.send(board);
});

// 수정
app.put('/board/:id', (req, res) => {
  const id = req.params.id;
  const board = req.body;
  const idx = boards.findIndex(e => e.id == id);
  if (idx >= 0) { 
    boards[idx] = board;
    res.send(board);
  }
  else {
    res.send("해당 게시글을 찾을 수 없어요!!");
  }
});

// 삭제
app.delete('/board/:id', (req, res) => {
  const id = req.params.id;
  boards = boards.filter(e => e.id != id);
  res.send(boards);
});

let emps = [
  {
    id: 1,
    name: "홍길동"
  },
  {
    id: 2,
    name: "고길동"
  }
];
// route() 같은 리소스(url) method 라우트 지정
app.route("/emp")
.get((req, res) => { res.send(emps) },)
// .get("/:id", (req, res) => { res.send(emps.find(e => e.id == req.params.id)) })
.post((req, res) => { res.send(req.body) })
.put((req, res) => { res.send(req.body) })
.delete((req, res) => { res.send(req.body) });

// Router로 모듈 분리
app.use('/product', require('./routers/product'));
app.use('/dept', require('./routers/dept'));
app.use('/comment', require('./routers/comment'));

app.listen(port, () => {
  console.log(`${url}에서 서버가 실행됨`);
});