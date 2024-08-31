import mongoose from "mongoose";

const signupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Ms", "Dr"],
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Phone number should be 10 digits."],
    },
    collegeName: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    cgpa_sgpa: {
      type: String,
      required: true,
      match: [
        /^\d+(\.\d{1,2})?$/,
        "CGPA/SGPA should be a number with up to two decimal places.",
      ],
    },
    yearOfGraduation: {
      type: Number,
      required: true,
      min: 1900,
      max: 2100,
    },
    currentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    proficiency: {
      type: String,
      required: true,
      trim: true,
    },
    skills: {
      type: [String],
      required: true,
      trim: true,
    },
    yearOfExperience: {
      type: Number,
      required: true,
      min: 0,
    },
    anyInternship: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    currentSalary: {
      type: String,
      trim: true,
      default: "Not Disclosed",
    },
    expectedSalary: {
      type: String,
      trim: true,
    },
    noticePeriod: {
      type: String,
      required: true,
      trim: true,
    },
    githubProfile: {
      type: String,
      trim: true,
      match: [
        /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]+$/,
        "Invalid GitHub profile URL",
      ],
    },
    linkedinProfile: {
      type: String,
      trim: true,
      match: [
        /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
        "Invalid LinkedIn profile URL",
      ],
    },
    personalPortfolio: {
      type: String,
      trim: true,
    },
    anyLiveProject: {
      type: String,
      trim: true,
    },
    resume: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SignUp = mongoose.model("SignUp", signupSchema);
