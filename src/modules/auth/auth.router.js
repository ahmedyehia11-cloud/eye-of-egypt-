import { Router } from "express";
import * as authController from './controller/auth.js'
import { asyncHandler } from "../../utils/errorHandling.js";  
const router = Router()

router.get('/',authController.getAuthModule)

router.post("/signup",authController.signUp);
router.post("/login", authController.logIn);

export default router