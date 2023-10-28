import { Request, Response } from 'express';
import { TUserRead, TUserReturn } from '../interfaces/users.interface';
import { createUserService, deleteUserService, readAllUsersService, updateUserService } from '../services/users.service';

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: TUserReturn = await createUserService(req.body);

    return res.status(201).json(user);
};

export const readAllUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: TUserRead = await readAllUsersService();
    
    return res.status(200).json(users);
};

export const updateUsersController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals;

    const newUser: TUserReturn = await updateUserService(req.body, user);
    
    return res.status(200).json(newUser);
};

export const deleteUsersController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals;

    await deleteUserService(user);
    
    return res.status(204).json();
};