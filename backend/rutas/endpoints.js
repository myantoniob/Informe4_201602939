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
            res.json({
                carnet: result.values[0],
                password: result.values[1]
        })
            
        }  
    })  
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
    res.json({
        carne:carnet,
        names: req.body.names
    });
});
// ************************
router.get('/categories/:categoryId/productos/:productId', (req, res) => {
    const {categoryId, productId} = req.params
    res.json({
        uno: categoryId,
        productId,
        name: 'Product 2',
        price: 200
    });
});


router.get('/users', (req, res)=>{
    const {limit, offset} = req.query;

    if (limit && offset){
        res.json({
            limit,
            offset
        });
    }else {
        res.send('NO hay params')
    }

});
// *************************
module.exports = router