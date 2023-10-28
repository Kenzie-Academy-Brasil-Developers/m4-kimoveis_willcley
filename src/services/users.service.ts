import { User } from '../entities/index';
import { TCreateUser, TUpdateUser, TUserRead, TUserReturn } from '../interfaces/users.interface';
import { userRepo } from '../repositories';
import { readUserSchema, userReturnSchema } from '../schemas/users.schema';

export const createUserService = async (data: TCreateUser): Promise<TUserReturn> => {
    const user: User = userRepo.create(data);

    await userRepo.save(user);

    return userReturnSchema.parse(user);
};

export const readAllUsersService = async (): Promise<TUserRead> => {
    const users: User[] = await userRepo.find();

    return readUserSchema.parse(users);
};

export const updateUserService = async (data: TUpdateUser, user: User): Promise<TUserReturn> => {
    const userUpdate: User = await userRepo.save({ ...user, ...data });

    return userReturnSchema.parse(userUpdate);
};

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepo.softRemove(user);
};