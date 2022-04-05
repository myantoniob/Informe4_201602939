const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const bodyparser = require('body-parser');


//const mysql = require('mysql')

const app = express();
app.options('*', cors())
app.use(bodyparser.json());
app.set('port', 3001);

app.use(express.json());
app.use(require('./rutas/endpoints'));  



app.listen(app.get('port'), ()=>{
    console.log("I am 3001 and working")
});