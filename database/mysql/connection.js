const mysql = require('mysql');
console.log(process.env);
var connection = mysql.createConnection({
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

connection.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log(err);
    }
});

module.exports = connection;