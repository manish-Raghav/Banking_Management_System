const express = require('express');
const {Add,Costumer, Getbyid,Setdata,setTranjection,getTranjection} = require('../Controller/usercontrol');
 const Router = express.Router();


 Router.post('/add' ,Add)
 Router.get('/customers',Costumer)
 Router.get('/customers/:id',Getbyid)
 Router.put('/customer/money',Setdata)
 Router.post('/transactions',setTranjection)
Router.get('/gettransactions',getTranjection)

module.exports =Router;

 