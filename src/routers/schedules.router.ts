import { Router } from 'express';
import { validateBody, verifyAdmin, verifyToken } from '../middlewares/globals.middleware';
import { verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists } from '../middlewares/schedules.middleware';
import { createScheduleSchema } from '../schemas/schedules.schema';
import { createScheduleController, readAllSchedulesRealEstateController } from '../controllers/schedules.controller';

export const scheduleRouter: Router = Router();

scheduleRouter.post(
    '/', 
    verifyToken,
    validateBody(createScheduleSchema),
    verifyRealEstateExists,
    verifyRealEstateScheduleExists,
    verifyUserScheduleExists,
    createScheduleController
);

scheduleRouter.get(
    '/realEstate/:id',
    verifyToken,
    verifyAdmin,
    readAllSchedulesRealEstateController
);