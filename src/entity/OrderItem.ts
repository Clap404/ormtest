import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany} from "typeorm"
import {Product} from "./Product";
import {Order} from "./Order";

@Entity()
export class OrderItem {

    constructor(data : Partial<OrderItem>) {
        Object.assign(this, data);
    }

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Order, order => order.items)
    order!: Order;

    @ManyToOne(() => Product) // no inverse side
    product!: Product;

    @Column()
    quantity!: number;
}
