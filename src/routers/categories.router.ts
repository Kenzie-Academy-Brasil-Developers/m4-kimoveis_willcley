import { Router } from 'express';
import { verifyAdmin, verifyToken } from '../middlewares/globals.middleware';
import { verifyCategoryExists, verifyUniqueCategoryName } from '../middlewares/categories.middleware';
import { createCategoryController, readAllCategoriesController, readRealEstateByCategoryController } from '../controllers/categories.controller';

export const categoryRouter: Router = Router();

categoryRouter.post(
    '/',
    verifyToken,
    verifyUniqueCategoryName,
    verifyAdmin,
    createCategoryController
);

categoryRouter.get(
    '/',
    readAllCategoriesController
);

categoryRouter.get(
    '/:id/realEstate',
    verifyCategoryExists,
    readRealEstateByCategoryController
);