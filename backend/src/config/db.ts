import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';


export const db = mysql.createPool({
  //user: process.env.DB_USER,
  //host: process.env.DB_HOST,
  //password: process.env.DB_PASS,
  //database: process.env.DB_NAME,

  host: 'localhost',
  user: 'root',
  password: '', // empty if no password in XAMPP
  database: 'sagip_db',
});

console.log('DB_USER:', process.env.DB_USER); // should be "root"

