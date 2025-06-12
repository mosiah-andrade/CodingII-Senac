import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbConfig, dialect } from "../config/db.config";
import { UH } from "../model/uh";

export const AppDataSource = new DataSource({
    type: dialect,
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    entities: [UH],
    synchronize: false,
    logging: true,
});