import pool from "./mysql/index.js";

const data = {
    name: "곽길동",
    email: 'u@a.com',
    phone: '010-2244-4422',
    address: '춘천'
  };
let sql = "INSERT customers (name, email, phone, address) values (?, ?, ?, ?)";

pool.query(sql, [ data.name, data.email, data.phone, data.address ], function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  // 3. 결과 처리
  console.log(results);
});
