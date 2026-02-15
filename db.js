import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config()

// Connecting my postress db to the project using the pool object constructor

const pool = new Pool({
    user: process.env.DB_User,
    host: process.env.DB_Host,
    database: process.env.DB_Database,
    password: process.env.DB_Password,
    port: process.env.DB_Port,
})

module.exports = pool;