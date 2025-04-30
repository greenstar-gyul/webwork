const express = require('express')
const app = express()
const port = 3000

let data = [
    {
      "id": "1",
      "first_name": "Massimiliano",
      "last_name": "Rosoni",
      "email": "mrosoni0@ibm.com",
      "salary": "$9.23",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "2",
      "first_name": "Rikki",
      "last_name": "Red",
      "email": "rred1@nps.gov",
      "salary": "$9.96",
      "department_id": 20,
      "job_id": "sales"
    },
    {
      "id": "3",
      "first_name": "Datha",
      "last_name": "Loosemore",
      "email": "dloosemore2@behance.net",
      "salary": "$6.59",
      "department_id": 30,
      "job_id": "it"
    },
    {
      "id": "4",
      "first_name": "Gildong",
      "last_name": "Loton",
      "email": "eloton3@dagondesign.com",
      "salary": "$3.38",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "5",
      "first_name": "Emmalee",
      "last_name": "Laboune",
      "email": "elaboune4@salon.com",
      "salary": "$8.40",
      "department_id": 20,
      "job_id": "sales"
    },
    {
      "id": "6",
      "first_name": "Michal",
      "last_name": "Ivanyushkin",
      "email": "mivanyushkin5@hao123.com",
      "salary": "$8.21",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "7",
      "first_name": "Robb",
      "last_name": "Gauche",
      "email": "rgauche6@fc2.com",
      "salary": "$8.09",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "8",
      "first_name": "Ange",
      "last_name": "Leon",
      "email": "aleon7@ucla.edu",
      "salary": "$0.33",
      "department_id": 10,
      "job_id": "sales"
    },
    {
      "id": "9",
      "first_name": "Odilia",
      "last_name": "Paye",
      "email": "opaye8@rakuten.co.jp",
      "salary": "$6.65",
      "department_id": 20,
      "job_id": "it"
    },
    {
      "id": "10",
      "first_name": "Yumi",
      "last_name": "Kim",
      "job_id": "it",
      "department_id": 20,
      "salary": "1000",
      "email": "a@a.a"
    }
  ]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 전체 조회
app.get('/emp', (req, res) => {
  res.send(data)
})

// 단건 조회
app.get('/emp/:id', (req, res) => {
  let result = data.find(e => e.id == req.params.id);
  res.send(result ? result : "not find");
})

// 부서번호 departmentId인 첫번째 사원 찾기
app.get('/find', (req, res) => {
  let id = req.query.departmentId;
  res.send(data.find(e => e.department_id == id))
})

app.get('/find/:id', (req, res) => {
  let id = req.params.id;
  res.send(data.find(e => e.department_id == id))
})

// 직군 jobId인 사원 찾기
app.get('/filter', (req, res) => {
  let id = req.query.jobId;
  res.send(data.filter(e => e.job_id == id))
})

app.get('/filter/:jobId', (req, res) => {
  res.send(data.filter(e => e.job_id == req.params.jobId))
})

// 이름으로 정렬하기
app.get('/sort', (req, res) => {
  let tempData = [...data];
  res.send(tempData.sort((a, b) => {
    if (a.first_name > b.first_name) return 1;
    else if (a.first_name < b.first_name) return -1;
    else return 0;
  }))
})

app.get('/home', (req, res) => {
  res.send('Hello Home!')
})

app.get('/cart', (req, res) => {
  res.send('Hello Cart!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
