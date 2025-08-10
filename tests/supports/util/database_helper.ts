import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import * as fs from 'fs';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
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
  try {
    const res = await client.query(sql, params);
    return res;
  } finally {
    client.release();
  }
}

export async function closePool() {
  await pool.end();
}
