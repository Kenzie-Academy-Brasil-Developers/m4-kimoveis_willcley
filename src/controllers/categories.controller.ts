import { Request, Response } from 'express';
import { Category } from '../entities/index';
import { createCategoryService, readAllCategoriesService, readRealEstateByCategoryService } from '../services/categories.service';
import { TReadAllCategories } from '../interfaces/categories.interface';

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const category: Category = await createCategoryService(req.body);
    
    return res.status(201).json(category);
};

export const readAllCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const categories: TReadAllCategories = await readAllCategoriesService();
    
    return res.status(200).json(categories);
};

export const readRealEstateByCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const realEstates = await readRealEstateByCategoryService(Number(id));

    return res.status(200).json(realEstates);
};