import { z } from 'zod';
import { createScheduleSchema } from '../schemas/schedules.schema';
import { Repository } from 'typeorm';
import { Schedule } from '../entities/index';

export type TCreateSchedule = z.infer<typeof createScheduleSchema>;

export type TScheduleRepo = Repository<Schedule>;