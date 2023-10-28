import { Router } from 'express';
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from '../middlewares/globals.middleware';
import { verifyUniqueUserEmail, verifyUserExists } from '../middlewares/users.middleware';
import { createUserSchema, updateUserSchema } from '../schemas/users.schema';
import { createUserController, deleteUsersController, readAllUsersController, updateUsersController } from '../controllers/users.controller';

export const userRouter: Router = Router();

userRouter.post(
    '/',
    validateBody(createUserSchema),
    verifyUniqueUserEmail,
    createUserController
);

userRouter.get(
    '/',
    verifyToken,
    verifyAdmin,
    readAllUsersController
);

userRouter.patch(
    '/:id',
    validateBody(updateUserSchema),
    verifyToken,
    verifyUserExists,
    verifyPermissions,
    updateUsersController
);

userRouter.delete(
    '/:id',
    verifyToken,
    verifyUserExists,
    verifyPermissions,
    verifyAdmin,
    deleteUsersController
);