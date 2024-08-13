const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express() ;
app.use(express.json())

const PORT = process.env.PORT || 8080 ;



app.use('/user',require('./Routes/user.routes'))

 mongoose.connect(process.env.DB_URI)
.then(()=> console.log("DataBase connected successfully"))
.catch((err)=>console.log('error',err)) 



app.listen(PORT , (err)=>{
    err? console.log('err', err) : console.log(`Server is Running on port : ${PORT} `)
})