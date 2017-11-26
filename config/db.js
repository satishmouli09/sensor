const pgp = require('pg-promise')();

//TODO: Add DB details
const connection = {
  host: 'sm-db',
  port: 5432,
  database: 'sm-shipments',
  user: "postgres",
  password: 'Swiftlabs@123'
};

const db = pgp(connection);
const qrm = pgp.queryResult;

const getCustomerDetails = function(customerId) {
  //TODO: Write query to get customer phone and email.
  
};