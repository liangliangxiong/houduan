// db.js
// 引入mysql模块
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // 数据库用户名
  password: '123456', // 数据库密码
  database: 'newsdatabase', // 数据库名
});

module.exports = pool;