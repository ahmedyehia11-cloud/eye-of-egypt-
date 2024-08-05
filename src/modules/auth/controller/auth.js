import userModel from "../../../../DB/models/User.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";
import { generateToken } from "../../../utils/generateAndVerfiyToken.js";
import { compare, hash } from "../../../utils/hashAndCompare.js";


export const getAuthModule = (req,res,next)=>{

 return res.json({message:"auth module"})

} 

export const signUp = asyncHandler(  async (req, res, next) => {
  // try {
  const { userName, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return  next(new Error('email exist',{cause:409}))
  }
  const hashPassword = hash({ plaintext: password });
  const createUser = await userModel.create({
    userName,
    email,
    password: hashPassword,
  });
  return res.status(201).json({ message: "done", user: createUser._id });
  }) //catch (error) {

  //         return res.json({ message: "catch error", error:error.stack});

  // }



export const logIn =asyncHandler( async (req, res, next) => {
 
    const {email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      //return res.json({ message: "email not exist " });
      return next(new Error("email not exist"));
    }
    const match = compare({ plaintext: password, hashValue: user.password });
            if (!match) {
                     return next(new Error("in_valid password"));
            }
            const access_token = generateToken({payload:{id:user._id,isLoggedIn:true,role:user.role}})
            user.status="online"
            await user.save()
    return res.json({ message: "done", access_token });


})
