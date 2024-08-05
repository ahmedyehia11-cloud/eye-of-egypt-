import { Router } from "express";
import * as userController from "./controller/user.js";
import auth from "../../middleware/auth.middleware.js";
import fileUpload from "../../utils/multer.js";
const router = Router();

router.post("/profile",auth,userController.profile);
router.patch("/profilePic",fileUpload().single('image'),auth, userController.profilePic);
router.patch("/profileCovPic",fileUpload().array("image",50 ),userController.profileCovPic);

export default router;
