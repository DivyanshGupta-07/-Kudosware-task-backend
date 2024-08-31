import { Router } from "express";
import signup from "../controllers/signupController.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/test").get((req, res) => {
  return res.status(200).json({
    status: 200,
    message: "this is testing route",
  });
});

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
