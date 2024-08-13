const User = require('../models/User.schema')

const usersCtrl = {
    addUser : (req,res)=>{
        const {firstName, lastName , age , email} = req.body
    
        const newUser= {firstName, lastName , age , email , createdAt : new Date()}
    
        const userToSave = new User(newUser)
    
        userToSave.save()
        .then(()=> res.status(200).send('user saved !'))
        .catch((err)=>console.log('err', err))
    } ,

    updateUser: (req,res)=>{
    
        const {firstName, lastName , age , email} = req.body
        User.updateOne(
            {_id:req.params.id},
            {
                $set:{
                    firstName, 
                    lastName , 
                    age , 
                    email,
                    updatedAt : new Date()
                }
            }
        )
        .then(()=> res.status(200).send('User updated successfully'))
        .catch((err)=> console.log('err', err))    
    },

    getUser: (req, res) => {

        User.find()
            .then((data) => res.json(data))
            .catch((err) => console.log('Error:', err));
    },

    deleteUser: (req, res) => {
        const id = req.params.id
    
        User.findByIdAndDelete({ _id: id })
            .then(() => res.send('user deleted successfuly'))
            .catch((err) => console.log('err', err))
    }
}

module.exports = usersCtrl