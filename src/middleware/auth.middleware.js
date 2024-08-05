import userModel from "../../DB/models/User.model.js";
import {verifyToken} from "../utils/generateAndVerfiyToken.js"

const auth = async (req,res,next)=>{
try {
        const { authorization } = req.headers;
        //console.log({authorization});
        if (!authorization?.startsWith(process.env.TOKEN_SIGNATURE)) {
          return res.json({ message: "authorization is required" });
        }
        const token = authorization.split(process.env.TOKEN_SIGNATURE)[1];
        // console.log(token);
        if (!token) {
          return res.json({ message: "in_valid token" });
        }
        const decoded = verifyToken({ token });
        if (!decoded?.id) {
          return res.json({ message: "in_valid token payload" });
        }
      //  console.log(decoded);
        const authUser = await userModel.findById(decoded.id).select('userName email status role ')
        if (!authUser) {
          return res.json({ message: "not register account" });
        }
        req.user = authUser;
        return next();
} catch (error) {
              return res.json({ message: "catch error ",error:error.stack });
}
}
export default auth 