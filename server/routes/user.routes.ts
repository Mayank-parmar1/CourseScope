import express from 'express';
import { activateUser, deleteUser, getAllUsers, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo, updateUserRole } from '../controllers/user.controller';
import { authorizeRoles, isAutheticated } from '../middleware/auth';
import { getAllUsersService } from '../services/user.service';
const userRouter = express.Router();
userRouter.post('/registration',registrationUser);
userRouter.post('/activate-user',activateUser);
userRouter.post('/login-user',loginUser);
userRouter.get('/logout-user',logoutUser);
userRouter.get('/refresh-token',updateAccessToken);
userRouter.get('/me',isAutheticated,getUserInfo);
userRouter.post('/social-auth',socialAuth);
userRouter.put('/update-user-info',isAutheticated,updateUserInfo);
userRouter.put('/update-user-password',isAutheticated,updatePassword);
userRouter.put('/update-user-profilePicture',isAutheticated,updateProfilePicture);
userRouter.get('/get-users',isAutheticated,authorizeRoles("admin"),getAllUsers);
userRouter.put(
    "/update-user",
    isAutheticated,
    authorizeRoles("admin"),
    updateUserRole
  );
  
  userRouter.delete(
    "/delete-user/:id",
    isAutheticated,
    authorizeRoles("admin"),
    deleteUser
  );


export default userRouter;
