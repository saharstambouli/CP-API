const mongoose = require('mongoose')

const Schema = mongoose.Schema ;
const userSchema = new Schema({
    firstName : String ,
    lastName : String ,
    age : Number,
    email : String, 
},{ timestamps: true })


const User = mongoose.model('users',userSchema)

module.exports = User