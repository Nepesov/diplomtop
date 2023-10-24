const express = require('express') ; 
const mysql = require('mysql') ; 
const cors = require('cors') ; 


const app = express() 
app.use(cors()) 

const db = mysql.createConnection({
    host: "localhost" , 
    user:'root',
    password:'123456789',
    database:'testt',
})

app.get('/', (re,res)=>{
    return res.json('from back'); 
})

app.get('/users', (req,res) =>{
    const sql = "SELECT * FROM users" ; 
    db.query(sql , (err, data)=>{
        if(err) return res.json(err) ; 
        return res.json(data) ; 
})
})

app.listen(8085, () =>{
    console.log('listening');
})

db.connect((err) => {
    if(err){
        console.log('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + db.threadId);
});

