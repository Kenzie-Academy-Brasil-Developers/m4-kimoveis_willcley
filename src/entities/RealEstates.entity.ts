import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Address } from './index';
import { Category } from './index';
import { Schedule } from './index';

@Entity('realEstates')
export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ default: false })
    sold: boolean;
    
    @Column({ type: 'float', default: 0 })
    value: number | string;

    @Column()
    size: number;
    
    @CreateDateColumn({ type: 'date' })
    createdAt: string;
    
    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];
    
    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category;
};