import { z } from 'zod';
import { createCategorySchema, readAllCategorySchema } from '../schemas/categories.schema';
import { Repository } from 'typeorm';
import { Category } from '../entities/index';

export type TCreateCategory = z.infer<typeof createCategorySchema>;
export type TReadAllCategories = z.infer<typeof readAllCategorySchema>;

export type TCategoryRepo = Repository<Category>;