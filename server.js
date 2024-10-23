const bodyParser = require('body-parser')
const express= require('express')
const cors =require('cors')
const route = require('./routes/userRoute')
// const { connect } = require('mongoose')
const multer = require('multer')
const PORT = process.env.PORT || 8000
// const url= process.env.MONGOOSEURL
const app = express()
let name=''
// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*')
//   res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
//   res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
//   next()
// }) 
app.use(cors())
app.use(bodyParser.json())
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./Public/images')
    } ,
    filename:function(req, file, cb){
        name = Date.now()+ '_'+ file.originalname
        return cb(null,`${Date.now()}_${file.originalname}`)
    }   
})   
const upload = multer({storage:storage})
 app.post('/upload',upload.single('file'),(req,res)=>{
console.log(req.file) 
 })

app.listen(PORT,()=> console.log(`server is runing on port ${PORT}`))