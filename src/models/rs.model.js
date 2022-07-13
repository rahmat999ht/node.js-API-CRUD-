"user strict";
var dbConn = require("../../config/db.config");

//Employee object create
var RumahSakit = function (users) {
  this.name = users.name;
  this.lat = users.lat;
  this.long = users.long;
};

RumahSakit.create = function (newEmp, result) {
  dbConn.query("INSERT INTO pmi set ?", newEmp, function (err, res) {
    if (err) {
    //   console.log("error: ", err);
      result(err, null);
    } else {
    //   console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

RumahSakit.findById = function (id, result) {
  dbConn.query(
    "Select * from pmi where id = ? ",
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

RumahSakit.findAll = function (result) {
  dbConn.query("Select * from pmi", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("users : ", res);
      result(null, res);
    }
  });
};

RumahSakit.update = function (id, user, result) {
  dbConn.query(
    "UPDATE pmi SET name=?,jkl=?,email=?,password=?,golongan=?,type=?,pmi_id=?,almat=? WHERE id = ?",
    [
      user.name,
      user.jkl,
      user.email,
      user.password,
      user.golongan,
      user.type,
      user.pmi_id,
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

RumahSakit.delete = function (id, result) {
  dbConn.query("DELETE FROM pmi WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = RumahSakit;
