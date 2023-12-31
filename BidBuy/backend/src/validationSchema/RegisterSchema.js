import { check } from "express-validator";

export const RegisterSchema = [
  check("firstname")
    .trim()
    .isAlpha()
    .withMessage("Name should be alphabets only"),
  check("lastname")
    .trim()
    .isAlpha()
    .withMessage("Name should be alphabets only"),

  check("username", "username is required")
    .exists()
    .isAlphanumeric()
    .withMessage("username should be alphaNumeric only")
    .trim()
    .isLength({ min: 6, max: 32 }),

  check("password", "Password is required")
    .exists()
    .isLength({ min: 6, max: 100 })
    .trim(),

  check("email", "Email is required").exists().isEmail(),
];
