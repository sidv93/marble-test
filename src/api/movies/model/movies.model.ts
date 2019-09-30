import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class Movies {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    language: string
}