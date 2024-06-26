import express from "express";
import {
    editCourse,
    getSingleCourse,
//   addAnwser,
//   addQuestion,
//   addReplyToReview,
//   addReview,
  deleteCourse,
//   editCourse,
//   generateVideoUrl,
//   getAdminAllCourses,
  getCourseByUser,
//   getSingleCourse,
  uploadCourse,
  addQuestion,
  addAnwser,
  addReview,
  addReplyToReview,
  getAllCourses,
} from "../controllers/course.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
import { getAllOrders } from "../controllers/order.controller";
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
courseRouter.get("/get-courses", getAllCourses);
courseRouter.put(
  "/add-reply",
  isAutheticated,
  authorizeRoles("admin"),
  addReplyToReview  
);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.delete(
  "/delete-course/:id",
  isAutheticated,
  authorizeRoles("admin"),
  deleteCourse
);


export default courseRouter;

  