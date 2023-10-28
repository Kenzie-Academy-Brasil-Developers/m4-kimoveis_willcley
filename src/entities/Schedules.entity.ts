import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RealEstate } from './index';
import { User } from './index';

@Entity('schedules')
export default class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'time' })
    hour: string;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User)
    user: User;
};