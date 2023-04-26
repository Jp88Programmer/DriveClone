import express  from "express";
import SeverController from "../controller/server.controller.js";

const router = express.Router()

router.get("/get",SeverController.get);  
router.post("/post:id",SeverController.post);  

export default router;