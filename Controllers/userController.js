const express = require('express')
const userServices = require('../Services/userServices')


const registerUser=async(req,res)=>{
try{
    const data = req.body
    if(data){
        const user = await userServices.registerUser(req.body)

        res.status(202).json(user)
    }
    else{
        res.json({message:'req body error'})
    }



}catch(err){
    res.status(404).json({message:err.message})
}
}

const getAllUsers = async (req,res)=>{
    try{
   const users = await userServices.getAllUsers()
   await res.json(users)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const getUserById=async(req,res)=>{
    const userId = req.params.id
    console.log(userId)
    try{
      const user = await userServices.getUserById(userId)
      if(!user){
        res.status(404).json({
            message:'user is not found'
        })
      }
      res.json(user)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
const deleteUser=async(req,res)=>{
    const userid = req.params.id
    try{
        const deletedUser = await userServices.deleteUser(userid)
        if(!deletedUser){
            res.status(404).json({message:'user is not found'})
        }
        res.json({
            message:'successfully delete the user',
            user:deleteUser
        })
    }catch(error){
        res.status(500).json({message:error.message})
    }

}
const updateUser= async(req,res)=>{
    const userId = req.params.id
    const updatedData= await req.body
    try{
const updatedUser= await userServices.updateUser(userId,updatedData)
if(!updatedUser){
    res.status(404).json({message:'user not found'})
}
res.json(updatedUser)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.registerUser = registerUser
module.exports.getAllUsers = getAllUsers
module.exports.deleteUser = deleteUser
module.exports.updateUser = updateUser
module.exports.getUserById = getUserById