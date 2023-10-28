import { NextFunction, Request, Response } from 'express';
import { RealEstate } from '../entities/index';
import { realEstateRepo, scheduleRepo } from '../repositories';
import AppError from '../errors/AppErrors.error';
import { Schedule } from '../entities/index';

export const verifyRealEstateExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { realEstateId } = req.body;
    const realEstate: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id: Number(realEstateId)
        }
    });

    if (!realEstate) throw new AppError('RealEstate not found', 404);

    return next();
};

export const verifyRealEstateScheduleExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { realEstateId, date, hour } = req.body;
    const schedule: Schedule | null = await scheduleRepo.findOne({
        where: {
            realEstate: {
                id: Number(realEstateId)
            },
            date,
            hour
        }
    });

    if (schedule) {
        throw new AppError(
            'Schedule to this real estate at this date and time already exists',
            409
        );
    };

    return next();
};

export const verifyUserScheduleExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { sub } = res.locals.decoded;
    const { hour, date } = req.body;
    
    const schedule: Schedule | null = await scheduleRepo.findOne({
        where: {
            user: {
                id: Number(sub)
            },
            date,
            hour
        }
    });

    if (schedule) {
        throw new AppError(
            'User schedule to this real estate at this date and time already exists',
            409
        );
    };

    return next();
};