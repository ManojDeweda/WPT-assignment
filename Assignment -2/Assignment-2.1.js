const mysql = require('mysql2');

let dbparams = {
    host: 'localhost',
    user: 'manoj',
    password: 'welcome123',
    database: 'dhar',
    port: 3306
}

const connection = mysql.createConnection(dbparams);

console.log("Connection working Successfully!!");