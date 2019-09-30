import { createConnection } from 'typeorm';

export namespace Database {
    export const connect = () => {
        createConnection({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            username: "root",
            password: "admin",
            database: "test",
            entities: [
                "../movies/model/movies.model.ts"
            ],
            synchronize: true,
        });
    }
}
