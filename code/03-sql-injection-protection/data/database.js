const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  uri: 'localhost',
  database: 'security',
  user: 'root',
  password: 'your-pw'
})

module.exports = pool;