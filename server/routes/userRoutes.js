import express from "express";
import { auth } from "../middlewares/auth.js";
import { getPublishedCreations, getUsercreations, toggleLikeCreation } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUsercreations)
userRouter.get('/get-published-creations', auth, getPublishedCreations)
userRouter.post('/toggle-like-creation', auth, toggleLikeCreation)

export default userRouter;