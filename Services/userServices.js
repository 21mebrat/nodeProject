const mongoose = require('mongoose')
const userSchema = require('../Modals/userModal')

const registerUser=async(userData)=>{
    const {name,email,password} = await userData
    const newUser = new userSchema({
        name:name,
        email:email,
        password:password
    })
    return await newUser.save()
    
}
const getAllUsers=async()=>{
    return await userSchema.find()
}
const getUserById=async(userId)=>{
return await userSchema.findById(userId)
}
const deleteUser=async(userId)=>{
    return await userSchema.findByIdAndDelete(userId)
}
const updateUser=async(userId,updateData)=>{
    return await userSchema.findByIdAndUpdate(userId,updateData,{
        new:true
    })
}

module.exports.registerUser = registerUser
module.exports.getAllUsers = getAllUsers
module.exports.deleteUser = deleteUser
module.exports.updateUser = updateUser
module.exports.getUserById = getUserById