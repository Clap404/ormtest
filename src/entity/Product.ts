import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export type Attribute = {name : string, value: string}

@Entity()
export class Product {

    constructor(data : Product) {
        Object.assign(this, data);
    }

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    description!: string

    @Column({type : 'jsonb', nullable: true})
    attributes?: Attribute[]
}
