import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // غيرها حسب إعداداتك
  password: 'yourpassword', // غيرها حسب إعداداتك
  database: 'employee_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;