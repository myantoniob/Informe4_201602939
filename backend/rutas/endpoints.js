const express = require('express');
const router = express.Router();
const fs = require('fs')

const mysqlconnection = require('../database.js')

router.get('/', (req, res) => {
    res.send("Practicas iniciales")
});

router.get('/validar', (req, res) => {
    const {carnet, password} = req.body
    sql = "SELECT * FROM users WHERE carne="+carnet+" and "+"password=\""+password+"\";";

    mysqlconnection.query(sql, [carnet, password], function(err, result){
        if(err){
            console.log(err)
        }else {
            console.log(result)
            res.json({
                carnet: result.carne,
                password: result.password
            })
        }
    });

});


router.post('/login', (req, res)=>{
    const {carnet, password} = req.body
    
    sql = "SELECT * FROM users WHERE carne=\""+carnet+"\" and password=\""+password+"\";";
    let result = mysqlconnection.query(sql, [carnet, password], (err, rows,fields)=>{
        if(err){
            console.log(err)
        }else {
            res.json({
                carnet: rows[0].carne,
                password: rows[0].password
        })
            
        }  
    }) 
    
});


router.post('/signin', (req, res) => {
    const {carnet, names, lastnames, email, password} = req.body
    const sql = "INSERT INTO users (carne, names, lastnames, password, email) VALUES (?,?,?,?,?);"

    mysqlconnection.query(sql, [carnet, names, lastnames, password, email],
        function(err, result){
            if(err){console.log(err.errno)  
                 res.json({error:err.errno})
            } 
            else {console.log(result.insertId)
                res.json({ id:result.insertId});
            }
        })
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

// http://localhost:3001/users?limit=10&offset=200
router.get('/pruevas123', (req, res)=>{
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

router.post('/pruevas123', (req, res) =>{
    const body = req.body

    res.json({
        message: 'created',
        data:body.uno
    });
});

router.delete('/pruevas123/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'deleted',
        id
    });
});


// 404 = not found
// 500 = se rempio en algun punto

// 100 - 199 = respuestas con informacion
// 200 - 299 = respuestas correctas
// 300 - 399 = redirecsion
// 400 - 499 = clinete error
// 500 - 599 = error de servicio
// *************************
module.exports = router