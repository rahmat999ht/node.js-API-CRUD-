"user strict";
var dbConn = require("../../config/db.config");

//Employee object create
var Users = function (users) {
  this.name = users.name;
  this.jkl = users.jkl;
  this.email = users.email;
  this.password = users.password;
  this.golongan = users.golongan;
  this.type = users.type;
  this.pmi_id = users.pmi_id;
  this.almat = users.almat;
  this.usia = users.usia;
};

Users.create = function (newEmp, result) {
  dbConn.query(
    "Select * from users where email = ? ",
    newEmp.email,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.length);
        if (res.length == 0) {
          dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
            if (err) {
              //   console.log("error: ", err);
              result(err, null);
            } else {
              console.log(res.insertId);
              dbConn.query(
                "Select * from users where id = ? ",
                res.insertId,
                function (err, res) {
                  if (err) {
                    console.log("error: ", err);
                    result(err, null);
                  } else {
                    var data = res[0];
                    data["error"] = false;
                    result(null, data);
                  }
                }
              );
              // result(null,
              //    res,
              // );
            }
          });
        } else {
          result(null, { error: true, message: "Email Sudah Ada" });
        }
      }
    }
  );
};

Users.findById = function (id, result) {
  dbConn.query("Select * from users where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Users.login = function (user, result) {
  // console.log(email,password)

  dbConn.query(
    `SELECT * FROM users WHERE email LIKE '${user.email}' AND password LIKE '${user.password}'`,
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

Users.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("users : ", res);
      result(null, res);
    }
  });
};

Users.update = function (id, user, result) {
  dbConn.query(
    "UPDATE users SET name=?,jkl=?,email=?,password=?,golongan=?,type=?,pmi_id=?,almat=?,usia=? WHERE id = ?",
    [
      user.name,
      user.jkl,
      user.email,
      user.password,
      user.golongan,
      user.type,
      user.pmi_id,
      user.almat,
      user.usia,
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

Users.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Users;
