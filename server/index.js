const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const db = mysql.createPool({
    host: 'database-country.cjxj72pgigwu.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'Thestrings23',
    database: "registroPaises"
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/get', (req,res) => {

    const nombre = req.body.nombre
    const pais = req.body.pais

    const sqlSelect = "SELECT * FROM Registro";
    db.query(sqlSelect,[nombre,pais], (err, result)=>{
        console.log(result)
        res.send(result)
    });
});



app.post("/api/insert", (req,res) => {

    const nombre = req.body.nombre
    const pais = req.body.pais

    const sqlInsert = "INSERT INTO Registro (nombre,pais) values (?,?)"
    db.query(sqlInsert, [nombre,pais], (err,result) => {
        res.redirect("localhost:3000")
    })
    
});

app.listen(3001, ()=> {
    console.log('Server running on port 3001');
});

