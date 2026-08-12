const fs = require("fs");
const http = require('http');
const PORT = 3000;
[
  {
    "name": "jignesh",
    "age": 23
  },
  {
    "name": "rohit",
    "age": 32
  },
  {
    "name": "aakash",
    "age": 24
  }
]


const server = http.createServer((req,res)=>{

   
     fs.readFile("jigneshhay.txt", "utf8" ,(err , data)=>{
        if(err){
            console.log(err)
            return;
        }

        const user = JSON.parse(data);

        const finding = user.find((u)=> u.name === "jignesh");
        
        if(finding){
        
               res.end(finding.name)
        }else{
            res.end("user")
        }

      
    })
        }
    
    )

server.listen(PORT, ()=>{console.log(`server runing on ${PORT}`)});

// const server  = http.createServer(function(req,res){
//      res.end("hello");
// })

// server.listen(3000,console.log("server is runing"));

// fs.appendFile("hey.txt", " namste kese ho  ", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.rename("hey.txt", "jigneshhay.txt", function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("name change")
//     }
// })
// fs.copyFile("jigneshhay.txt", "./Copy/copy.txt", function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file copy in new file ")
//     }
// })

// fs.unlink("./copy/copy.txt", function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleted")
//     }
// })

// fs.rm("./copy", function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder deleted if empty");
//     }
// })

// fs.rm("./copy", {recursive : true}, function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder deleted");
//     }
// })
// fs.readFile("jigneshhay.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })