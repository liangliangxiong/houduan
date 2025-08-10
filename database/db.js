// db.js
// 引入mysql模块
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // 数据库用户名
  password: '2718358xu', // 数据库密码
  database: 'booking_app', // 数据库名
});

module.exports = pool;