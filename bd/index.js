var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:Admin@localhost:5432/database');

module.exports = db;