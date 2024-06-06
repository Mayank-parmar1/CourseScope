import express from 'express';
import { activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo } from '../controllers/user.controller';
import { authorizeRoles, isAutheticated } from '../middleware/auth';
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
// userRouter.get('/get-users',isAutheticated,authorizeRoles("admin"),getAllUsers);



export default userRouter;
