import { Address } from '../entities/index';
import { Category } from '../entities/index';
import { RealEstate } from '../entities/index';
import { TCreateRealEstate } from '../interfaces/realEstates.interface';
import { addressRepo, categoryRepo, realEstateRepo } from '../repositories';

export const createRealEstateService = async (data: TCreateRealEstate): Promise<RealEstate> => {
    const category: Category | null = await categoryRepo.findOneBy({ id: data.categoryId });

    const address: Address = await addressRepo.save(data.address);
    const realEstate: RealEstate = await realEstateRepo.save({ ...data, address, category: category! });

    return realEstate;
};

export const readAllRealEstatesService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
        relations: {
            address: true
        }
    });
};