const sqllist = {
  selectList: "SELECT * FROM customers",
  selectById: "SELECT * FROM customers WHERE id = ?",
  insertCstm: "INSERT customers SET ?",
  updateCstm: "UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?",
  deleteCstm: "DELETE FROM customers WHERE id = ?"
}

module.exports = sqllist;