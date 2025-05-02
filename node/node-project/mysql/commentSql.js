const sqllist = {
  selectList: "SELECT * FROM comment WHERE bid = ?",
  insertComment: "INSERT comment SET ?",
  deleteComment: "DELETE FROM comment WHERE id = ?"
}

module.exports = sqllist;