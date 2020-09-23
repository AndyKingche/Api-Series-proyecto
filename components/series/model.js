const postgres = require('pg');
connectionData ={
    host: process.env.HOST,
    user:   process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
  }
  const connection = new postgres.Client(connectionData);
  connection.connect();
  module.exports = {
      connection
  };