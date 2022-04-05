const {connect} = require('http2');
const mysql = require('mysql')

const conection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'informe4',
});

conection.connect(function(err){
    if(err){
        console.log(err)
        return;
    }else {
        console.log('Conected')
    }
});

module.exports = conection;