import { Pool } from "pg";

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'userAuthentication',
    password: '',
    port: 5432,
})