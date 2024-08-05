    import multer from "multer";
import { nanoid } from "nanoid";
    function fileUpload (){

const storage = multer.diskStorage({

       destination:(req,file,cb)=>{
           cb(null,'uploads')
       },
       filename:(req,file,cb)=>{
        console.log({file});
        cb(null,nanoid()+"-"+file.originalname)
       }
 }) 
 function fileFilter  (req,file,cb){
    if (file.mimetype=='image/jpeg' ||file.mimetype=='image/png' ||file.mimetype=='image/gif'||file.mimetype=='image/jpg' ) {
        cb(null,true)
    
    }else{cb('in_valid format',false)}
 }
 const upload = multer({ dest: "uploads",fileFilter,storage });
 return upload
}

export default fileUpload