"user strict";
var dbConn = require("../../config/db.config");

//Employee object create
var Stock = function (stock) {
  this.id = stock.id;
  this.golongan = stock.golongan;
  this.goldar = stock.goldar;
  this.stock = stock.stock;
  this.pmi_id = stock.pmi_id;
};

Stock.create = function (newEmp, result) {
  dbConn.query("INSERT INTO stock set ?", newEmp, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Stock.findById = function (id, result) {
  dbConn.query(
    "Select * from stock where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Stock.findAll = function (result) {
  dbConn.query("SELECT * FROM stock INNER JOIN goldar ON stock.golongan = goldar.id_goldar", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("users : ", res);
      result(null, res);
    }
  });
};

Stock.update = function (id, user, result) {
  dbConn.query(
    "UPDATE stock SET golongan=?,stock=?,pmi_id=? WHERE id = ?",
    [
      user.golongan,
      user.stock,
      user.pmi_id,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Stock.delete = function (id, result) {
  dbConn.query("DELETE FROM pmi WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Stock;