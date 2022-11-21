import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Order} from "./Order";

@Entity()
export class User {

    constructor(data : Partial<User>) {
        Object.assign(this, data);
    }

    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column({
        nullable: true
    })
    favouriteColor?: 'yellow' | 'red' | 'blue' | 'green'

    @OneToMany(() => Order, (order) => order.user)
    orders?: Order[];
}
