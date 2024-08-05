import userModel from "../../../../DB/models/user.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const profile = async (req, res, next) => {
  const user = await userModel.findById(req.user.id)
  return res.json({ message: "done" ,user});
};


export const profilePic = asyncHandler(async (req,res,next)=>{
const user =  await userModel.findByIdAndUpdate(req.user._id,{profilePic:`uploads/${req.file.filename}`},{new:true})     
  return res.json({message :'done', user})
})


export const profileCovPic = asyncHandler(async (req, res, next) => {
  const coverPic=[]
  for (const file of req.files){
    coverPic.push(`uploads/${file.filename}`);
  } 
  const user = await userModel.findByIdAndUpdate(req.user._id,{ coverPic},{ new: true });
  return res.json({ message: "done", user });
});