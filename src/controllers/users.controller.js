"use strict";

const Users = require("../models/users.model");

exports.findAll = function (req, res) {
  Users.findAll(function (err, user) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", user);
    res.send(user);
  });
};

exports.create = function (req, res) {
  const new_users = new Users(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.create(new_users, function (err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  }
};

exports.findById = function (req, res) {
  Users.findById(req.params.id, function (err, users) {
    if (err) res.send(err);
    res.json(users);
  });
};

exports.login = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.login(req.body, function (err, users) {
      if (err) res.send(err);
      if (users.length == 0) {
        res.status(400).send({ error: true, message: "Ada Yang Salah" });
      } else {
        res.json(users);
      }
    });
  }
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Users.update(req.params.id, new Users(req.body), function (err, users) {
      if (err) res.send(err);
      res.json({ error: false, message: "users successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  Users.delete(req.params.id, function (err, users) {
    if (err) res.send(err);
    res.json({ error: false, message: "users successfully deleted" });
  });
};
