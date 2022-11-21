import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm"
import {User} from "./User";
import {OrderItem} from "./OrderItem";

@Entity()
export class Order {

    constructor(data : Partial<Order>) {
        Object.assign(this, data);
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.orders)
    user!: User;

    @ManyToMany(() => OrderItem, orderItem => orderItem.order)
    items!: OrderItem[];
}
