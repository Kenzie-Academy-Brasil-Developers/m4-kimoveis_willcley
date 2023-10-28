import { Request, Response } from 'express';
import { RealEstate } from '../entities/index';
import { createRealEstateService, readAllRealEstatesService } from '../services/realEstates.service';

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const realEstate: RealEstate = await createRealEstateService(req.body);
    
    return res.status(201).json(realEstate);
};

export const readAllRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const realEstates: RealEstate[] = await readAllRealEstatesService();

    return res.status(200).json(realEstates);
};