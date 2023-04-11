const mysql = require('mysql');
const config =  {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config);

connection.connect((err) => {
    console.log("Connected database.")
});

module.exports = connection;