import { SignUp } from "../model/signupModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";

const signup = async (req, res) => {
  const data = req.body;
  const resumeLocalPath = req.files?.resume[0]?.path;
  const existingUser = await SignUp.findOne({ email: data.email });
  if (existingUser) {
    fs.unlinkSync(resumeLocalPath);
    return res.status(409).json({
      sucess: false,
      message: "user already registered",
    });
  }

  if (!resumeLocalPath) {
    return res.status(400).json({
      sucess: false,
      message: "resume required",
    });
  }

  const resume = await uploadOnCloudinary(resumeLocalPath);
  if (!resume) {
    return res.status(400).json({
      sucess: false,
      message: "resume not uploaded",
    });
  }

  const signupObj = {
    ...req.body,
    resume: resume.url,
  };
  const response = await SignUp.create(signupObj);

  if (!response) {
    return res.status(400).json({
      sucess: false,
      message: "error while creating new entry",
    });
  }

  return res.status(201).json({
    sucess: true,
    message: "user created sucess",
  });
};

export default signup;
