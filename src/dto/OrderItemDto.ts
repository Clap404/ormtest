export class OrderItemDto {

    constructor(data: OrderItemDto) {
        Object.assign(this, data);
    }

    productId!: number;
    quantity!: number
}
