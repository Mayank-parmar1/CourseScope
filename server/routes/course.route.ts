import express from "express";
import {
    editCourse,
    getSingleCourse,
//   addAnwser,
//   addQuestion,
//   addReplyToReview,
//   addReview,
//   deleteCourse,
//   editCourse,
//   generateVideoUrl,
//   getAdminAllCourses,
//   getAllCourses,
  getCourseByUser,
//   getSingleCourse,
  uploadCourse,
  addQuestion,
  addAnwser,
  addReview,
  addReplyToReview,
} from "../controllers/course.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
const courseRouter = express.Router();


courseRouter.post(
    "/create-course",
    isAutheticated,
    authorizeRoles("admin"),
    uploadCourse
  );
  courseRouter.put(
    "/edit-course/:id",
    isAutheticated,
    authorizeRoles("admin"),
    editCourse
  );

  courseRouter.get("/get-course/:id", getSingleCourse);
  courseRouter.get("/get-course-content/:id", isAutheticated, getCourseByUser);
  courseRouter.put("/add-question", isAutheticated, addQuestion);

courseRouter.put("/add-answer", isAutheticated, addAnwser);
courseRouter.put("/add-review/:id", isAutheticated, addReview);

courseRouter.put(
  "/add-reply",
  isAutheticated,
  authorizeRoles("admin"),
  addReplyToReview
);

  