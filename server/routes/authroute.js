import express from "express";
import { signIn, signUp } from "../controllers/authController.js";

//store router interface 

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup',signUp);

//export router 

export default router;