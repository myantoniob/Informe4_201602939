const express = require('express');
const router = express.Router();
const fs = require('fs')

const mysqlconnection = require('../database.js')

router.get('/', (req, res) => {
    res.send("Practicas iniciales")
    
});


router.post('/login', (req, res)=>{
    const {carnet, password} = req.body
    sql = "SELECT * FROM users WHERE carne=\""+carnet+"\" and password=\""+password+"\";";
    let result = mysqlconnection.query(sql, [carnet, password], (err, rows,fields)=>{
        if(err){
            console.log(err)
        }else {
            console.log(result.values[0])
            console.log(result.values[1])
            res.json(result.values[0])
            
        } 
        //res.json(rows)
        
    })

    //if (carnet == result.values[0]){console.log(result.values[0])} 
    //res.send(result.values)
    
});

router.post('/signin', (req, res) => {
    const {carnet, names, lastnames, email, password} = req.body
    const sql = "INSERT INTO users (carne, names, lastnames, password, email) VALUES (?,?,?,?,?);"

    mysqlconnection.query(sql, [carnet, names, lastnames, password, email],
        function(err, result){
            if(err) throw err;
            console.log("Insercion echa")
        })
    console.log(carnet, names, lastnames, email, password)
});



/*

*/
module.exports = router