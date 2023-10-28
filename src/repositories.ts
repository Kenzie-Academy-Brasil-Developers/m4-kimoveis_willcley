import { AppDataSource } from './data-source';
import { Category } from './entities/index';
import { Address } from './entities/index';
import { User } from './entities/index';
import { RealEstate } from './entities/index';
import { Schedule } from './entities/index';
import { TCategoryRepo } from './interfaces/categories.interface';
import { TUserRepo } from './interfaces/users.interface';
import { TScheduleRepo } from './interfaces/schdules.interface';
import { TAddressRepo, TRealEstateRepo } from './interfaces/realEstates.interface';

export const categoryRepo: TCategoryRepo = AppDataSource.getRepository(Category);
export const addressRepo: TAddressRepo = AppDataSource.getRepository(Address);
export const userRepo: TUserRepo = AppDataSource.getRepository(User);
export const realEstateRepo: TRealEstateRepo = AppDataSource.getRepository(RealEstate);
export const scheduleRepo: TScheduleRepo = AppDataSource.getRepository(Schedule);