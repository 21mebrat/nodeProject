const http = require('http')
const url = require('url')
const fs = require('fs/promises')
const path = require('path')
const PORT = process.env.PORT 
const __fileName = url.fileURLToPath()
const _dirName = path.dirname(__fileName)
const server = http.createServer(async(req,res)=>{
res.writeHead(200,{"Content-Type":"text/html"})
 try{
if(req.method=== 'GET'){
    let filePath
    if(req.url === '/'){
        filePath = path.join(__dirname,'home.html')

      res.setHeader({"Content-Type":"text/html"})
      const data = await fs.readFile(filePath)
      res.write(data)
      res.end()
    }
    else if(req.url === '/about'){
        res.end('<h1> about page is here</h1>')

    }
    else if(req.url === '/contact'){
        res.end('<h1> constact page is here</h1>')

    }
    else{
        res.end('<h1> the route is not found </h1>')

    } 

}else{

    throw new Error('the method is not get')
}
 }catch(error){
{
    res.end(JSON.stringify({
        message:error
    }))
}
 }

 

})



server.listen(PORT,()=> console.log(`server runing on port ${PORT}`))