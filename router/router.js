import { Router } from "express";
import { resister ,login} from "../controllers/controllers.js";

const router=Router()

router.post("/signup",resister)
router.post("/login",login)
export default router