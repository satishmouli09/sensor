const express = require('express');
const app = express();
const db = require('./config/db');

app.post('/notify', function (req, res, next) {
  let customerId = req.body.customer_id;
  let customerPhone;
  let customerEmail;
  //TODO: Get customer phone and email
  // db.query()
  if (customerPhone) {
    //TODO: Send SMS to customer
  }
  if (customerEmail) {
    //TODO: Send Email to customer
  }
  //TODO: Promise.all then if success send success response
});