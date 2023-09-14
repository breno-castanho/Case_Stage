import  Express  from "express";
import { getUsers } from "../controllers/user.js";

const router = Express.Router();

router.get("/", getUsers);

export default router;