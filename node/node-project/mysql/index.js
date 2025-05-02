// mysql 모듈 로드
const mysql = require("mysql2");
const customersqllist = require('../mysql/customerSql');
const boardsqllist = require('../mysql/boardSql');
const commentsqllist = require('../mysql/commentSql');

// mysql 접속 정보
const conn = {
  // 필수
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT
};
// DB 커넥션 풀 생성
let pool = mysql.createPool(conn);

const customerQuery = (sqlKey, data) => {
  const sql = customersqllist[sqlKey];
  return new Promise((resolve, reject) => {pool.query(sql, data, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    })
  })
};

const boardQuery = (sqlKey, data) => {
  const sql = boardsqllist[sqlKey];
  return new Promise((resolve, reject) => {pool.query(sql, data, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    })
  })
};

const commentQuery = (sqlKey, data) => {
  const sql = commentsqllist[sqlKey];
  return new Promise((resolve, reject) => {pool.query(sql, data, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    })
  })
};

module.exports = {
  customerQuery: customerQuery,
  boardQuery: boardQuery,
  commentQuery: commentQuery
}
