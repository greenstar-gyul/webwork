const sqllist = {
  selectList: "SELECT * FROM board",
  selectById: "SELECT * FROM board WHERE id = ?",
  insertBoard: "INSERT board SET ?",
  updateBoard: "UPDATE board SET title = ?, writer = ?, content = ?, created_date = ? WHERE id = ?",
  deleteBoard: "DELETE FROM board WHERE id = ?"
}

module.exports = sqllist;