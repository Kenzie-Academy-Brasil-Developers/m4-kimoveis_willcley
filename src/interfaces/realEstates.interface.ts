import { z } from 'zod';
import { createRealEstateSchema } from '../schemas/realEstates.schema';
import { Repository } from 'typeorm';
import { RealEstate } from '../entities/index';
import { Address } from '../entities/index';

export type TCreateRealEstate = z.infer<typeof createRealEstateSchema>;

export type TRealEstateRepo = Repository<RealEstate>;
export type TAddressRepo = Repository<Address>;