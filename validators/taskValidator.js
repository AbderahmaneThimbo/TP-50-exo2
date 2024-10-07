import { body } from "express-validator";

export const validateTask = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("status")
    .optional()
    .isIn(["pending", "completed"])
    .withMessage("Invalid status")
];
