const express=require("express")
const app=express()
const multer=require("multer")
const route=require("./routers/upload")

// const upload=multer({
//     dest:"public"

// })

// app.post("/upload",upload.single("upload"),(req,res)=>{

//     res.send("hello")
// })
// app.set("views",__dirname+"/")

app.use("/",route)
app.set("view engine","hbs")
// app.use("/download",express.static(__dirname+"/views/1b49fe185d4558c1adbf6e178fd07207"))
// app.set("/download","Content-Type","image/jpg")



// app.get("/download",(req,res)=>{

//     res.set("Content-Type","image/jpg")
//     res.sendFile(__dirname+"/views/1b49fe185d4558c1adbf6e178fd07207")
// })
app.listen(7211)