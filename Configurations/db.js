const mongoose = require('mongoose')
const url= process.env.MONGOOSEURL

const connectDb =async()=>{
    try{
await mongoose.connect(url)
     console.log('connection is sucessfull!')
    }catch(err){
     console.log('connction got some error',err)
    }
}


module.exports = connectDb