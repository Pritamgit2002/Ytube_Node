import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "Avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
); // we are defining route for registerUser function, adding register route after user
//https://localhost:8000/api/v1/users/register

export default router;
