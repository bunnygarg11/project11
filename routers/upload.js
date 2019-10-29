const express=require("express")
const router=express.Router()
const multer=require("multer")
const upload=multer({
    dest:"./views",
    limits:{
        fileSize:100000000
    },
    storage:multer.diskStorage({
        destination(req,file,cb){
            cb(undefined,"./views")
        },
        filename(req,file,cb){
            cb(undefined,file.originalname)
        }
    })
    
})
// router.set("views","../public")

let info=[]


router.get("/download?:filename",(req,res)=>{

    console.log(info[0].filename)
    for(i in info){
        if(req.query.file===info[i].filename){
            console.log('SUCCESS')
            if(info[i].filename.endsWith(".pdf")){
                  res.type("pdf")
            }
            // res.type("Content-Type","image/jpg")
            return res.sendFile("/home/mohit/Documents/project11/views/"+info[i].filename)
        }
    }
    res.send('file not found');
    // res.sendFile("/views/1b49fe185d4558c1adbf6e178fd07207")
})


// router.get("/download",(req,res)=>{

//     console.log(info[0].filename)
//     res.type('pdf')
//     // res.set("Content-Type","text/plain")
//     // res.sendFile("/views/1b49fe185d4558c1adbf6e178fd07207")
//     res.sendFile("/home/mohit/Documents/project11/views/"+info[0].filename)
// })

router.get("/",(req,res)=>{
    // res.set("view engine","hbs")

    res.render("index.hbs",{
        info
    })
})
router.post("/upload",upload.single("upload"),(req,res)=>{


    info.push(req.file)
    console.log(info)
    res.redirect("/")
})

// router.get("/",(req,res)=>{
// res.send("hello")
// })

module.exports=router
// const partialspath=path.join(__dirname, '/templates/partials')
// hbs.registerPartials(partialspath);
// const viewpath = path.join(__dirname,'/templates/frontend')
// app.set('views', viewpath);
// console.log("."+__dirname)