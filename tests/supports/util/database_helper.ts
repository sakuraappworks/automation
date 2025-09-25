import * as dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}

export async function queryFromFile(sqlFilePath: string, params?: any[]) {
  const absolutePath = path.isAbsolute(sqlFilePath)
    ? sqlFilePath
    : path.join(process.cwd(), sqlFilePath);
  const sql = fs.readFileSync(absolutePath, 'utf-8');
  const client = await pool.connect();
  console.log('Connected to Database successfully!');
  try {
    const res = await client.query(sql, params);
    return res;
  } finally {
    client.release();
  }
}

export async function closePool() {
  await pool.end();
  console.log('Disconnected to Database successfully!');
}
