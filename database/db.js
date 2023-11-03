// db.js
// 引入mysql模块
const mysql = require('mysql');

// 创建数据库连接池
// const pool = mysql.createPool({
//   host: '192.168.1.101',
//   user: '1111', // 数据库用户名
//   password: '12345678', // 数据库密码
//   port:'3306',
//   database: 'health_tracking_system_for_the_elderly', // 数据库名
// });
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // 数据库用户名
  password: '123456', // 数据库密码
  database: 'health_tracking_system_for_the_elderly', // 数据库名
});

module.exports = pool;