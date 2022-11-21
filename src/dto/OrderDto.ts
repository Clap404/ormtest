import {OrderItemDto} from "./OrderItemDto";

export class OrderDto {

    constructor(data : OrderDto) {
        Object.assign(this, data);
    }

    items!: OrderItemDto[];
}
