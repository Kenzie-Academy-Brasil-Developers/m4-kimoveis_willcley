import { z } from 'zod';
import { createUserSchema, readUserSchema, userLoginSchema, userReturnSchema } from '../schemas/users.schema';
import { DeepPartial, Repository } from 'typeorm';
import { User } from '../entities/index';

export type TCreateUser = z.infer<typeof createUserSchema>;
export type TUpdateUserBody = Omit<TCreateUser, 'admin'>;
export type TUpdateUser = DeepPartial<TUpdateUserBody>;
export type TUserReturn = z.infer<typeof userReturnSchema>;
export type TUserRead = z.infer<typeof readUserSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
export type TLoginReturn = { token: string };

export type TUserRepo = Repository<User>;