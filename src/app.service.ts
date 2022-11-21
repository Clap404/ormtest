import {Injectable} from '@nestjs/common';
import {DataSource} from "typeorm";
import {User} from "./entity/User";
import {Order} from "./entity/Order";
import {OrderItem} from "./entity/OrderItem";
import {Product} from "./entity/Product";
import {OrderDto} from "./dto/OrderDto";

@Injectable()
export class AppService {

    private readonly dataSource

    constructor(datasource: DataSource) {
        this.dataSource = datasource;
    }

    async populate(): Promise<void> {
        const userRepo = this.dataSource.getRepository(User);
        await userRepo.create(new User({
            firstName: "Alice", lastName: "InChains"
        }))
        await userRepo.create(new User({
            firstName: "Bob", lastName: "Dylan"
        }))
    }

    async clean(): Promise<void> {
        this.dataSource.getRepository(Order).truncate();
        this.dataSource.getRepository(OrderItem).truncate();
        this.dataSource.getRepository(User).truncate();
        this.dataSource.getRepository(Product).truncate();
    }

    order(userId: number, orderDto: OrderDto): Promise<void> {
        const order = new Order({
            items: orderDto.items.map(it => {
                return new OrderItem({id: it.productId, quantity: it.quantity})
            }),
            user: new User({id: userId})
        })
        return this.dataSource.getRepository(Order).save(order);
    }
}
