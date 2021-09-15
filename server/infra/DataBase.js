const pgp = require('pe-promise')();
const db = pgp({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'exemplo-rest-api'
});

module.exports = db;
