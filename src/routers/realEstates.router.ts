import { Router } from 'express';
import { validateBody, verifyAdmin, verifyToken } from '../middlewares/globals.middleware';
import { verifyAddressExists } from '../middlewares/realEstates.middleware';
import { createRealEstateSchema } from '../schemas/realEstates.schema';
import { createRealEstateController, readAllRealEstateController } from '../controllers/realEstates.controller';

export const realEstateRouter: Router = Router();

realEstateRouter.post(
    '/',
    verifyToken,
    verifyAdmin,
    validateBody(createRealEstateSchema),
    verifyAddressExists,
    createRealEstateController
);

realEstateRouter.get(
    '/',
    readAllRealEstateController
);