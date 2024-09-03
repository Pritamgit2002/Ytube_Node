import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

const router = Router();

router.route("/register").post(registerUser); // we are defining route for registerUser function, adding register route after user
//https://localhost:8000/api/v1/users/register

export { router };
