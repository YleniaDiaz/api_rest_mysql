const MYSQL = require('mysql');

//createConnection() -> objeto como parámetro
const CONNECTION = MYSQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ylenia',
    database: 'company'
});

CONNECTION.connect((err)=>
    console.log(err ? `ERROR DATABASE -> ${err.message}` : 'OK DATABASE'));

module.exports=CONNECTION;