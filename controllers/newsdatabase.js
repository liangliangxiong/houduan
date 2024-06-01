const { RANDOM } = require('mysql/lib/PoolSelector');
let pool = require('../database/newsdatabase')

exports.GetAllNews = (req, res) => {
  const query = 'SELECT * FROM news';
  pool.query(query, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    } else {
      res.send(data);
    }
  });
}
// 只查找swiper的ID
exports.GetAllSwipers = (req, res) => {
  const query = 'SELECT * FROM swipers';
  pool.query(query, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    } else {
      res.send(data);
    }
  });
}
// 只查找随机类别的药物
exports.medicineproducts = (req, res) => {
  // 获取1到7的随机整数
  const randomNumber = Math.floor(Math.random() * 7) + 1;
  console.log(randomNumber);
  const query = 'SELECT * FROM medicineproducts where category = ?';
  pool.query(query, [randomNumber], (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    } else {
      res.send(data);
    }
  });
}

