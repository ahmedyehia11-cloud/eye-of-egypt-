import { Router } from "express";
import * as placeController from "./controller/place.js";
import fileUpload from "../../utils/multer.js";
//import auth from "../../middleware/auth.middleware.js";
const router = Router();
router.post("/new",placeController.addPlace);
// router.post("/appPic", fileUpload().array("image",50 ),placeController.addPic);

export default router;
