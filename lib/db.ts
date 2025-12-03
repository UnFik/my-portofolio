import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@localhost:5432/portofolio_db',
});

export const db = drizzle(pool);
