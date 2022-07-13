'use strict';

const Stock = require('../models/stok.model');

exports.findAll = function(req, res) {
    Stock.findAll(function(err, user) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', user);
    res.send(user);
  });
};


exports.create = function(req, res) {
    const new_employee = new Stock(req.body);

   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Stock.create(new_employee, function(err, employee) {
            if (err)
            res.send(err);
            res.json({error:false,message:"stok added successfully!",data:employee});
        });
    }
};


exports.findById = function(req, res) {
    Stock.findById(req.params.id, function(err, employee) {
        if (err)
        res.send(err);
        res.json(employee);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Stock.update(req.params.id, new Employee(req.body), function(err, employee) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'stok successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Stock.delete( req.params.id, function(err, employee) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'stok successfully deleted' });
  });
};