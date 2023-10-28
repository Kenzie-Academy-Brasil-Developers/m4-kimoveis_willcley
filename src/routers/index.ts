import { Router } from 'express';
import { userRouter } from './users.router';
import { sessionRouter } from './session.router';
import { categoryRouter } from './categories.router';
import { realEstateRouter } from './realEstates.router';
import { scheduleRouter } from './schedules.router';

export const routers: Router = Router();

routers.use('/users', userRouter);

routers.use('/login', sessionRouter);

routers.use('/categories', categoryRouter);

routers.use('/realEstate', realEstateRouter);

routers.use('/schedules', scheduleRouter);