import { Router } from "express";
import signup from "../controllers/signupController.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/signup").post(
  upload.fields([
    {
      name: "resume",
      maxCount: 1,
    },
  ]),
  signup
);

export default router;
