/**
 * 评估模块
 */
let pool=require('../database/db')

//获取pgzb_table表全部数据
exports.getPgzb_table=(req,res)=>{
    var sql = 'select * from pgzb_table'
    pool.query(sql, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      }
      res.json(data)
    })
}

//拿到所有的评估类型
/**
 * "lx_id": 1,
 * "lx": "健康指标"
 */
exports.getAllPglx=(req,res)=>{
    var sql = 'select * from pglx_table'
    pool.query(sql, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      }
      res.json(data);
      // console.log(data);
    })
}
/**
 * 获取评估指标1
 * "pgzb_id": 31,
   "pgzb": "您认为您的健康状况",
   "leix_id": 1
 */
exports.getPgzbz1=(req,res)=>{
    const query = 'SELECT * FROM pgzb1_table';
    pool.query(query, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      } else {
        res.json(data);
      }
    });
}

// 获取评估指标值
/** 
 * "pgzbz_id": 1,
   "pgzbzvalue": "是"
*/
exports.getPgzbz=(req,res)=>{
    const query = 'SELECT * FROM pgzbz';
    pool.query(query, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      } else {
        res.json(data);
      }
    });
}

//拿评估指标表的最大id
exports.getPgzb_table_maxID=(req,res)=>{
  var sql = 'SELECT MAX(pgzb_id) tb FROM pgzb_table'
  pool.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//拿到oldmantx表的最大id
exports.getOldmantx_maxid=(req,res)=>{
  var sql = 'SELECT MAX(oldmantx_id) tb FROM oldmantx'
  pool.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

// {
//   oldmantx_id: 16,
//   oldman_id: "123", // 为 oldman_id 提供有效的值
//   danganpack_id: 456,
//   pgzb_id: 789,
//   pgzbz_id: 101,
//   time: "2023-10-30"
// },
// {
//   oldmantx_id: 17,
//   oldman_id: "123", // 为 oldman_id 提供有效的值
//   danganpack_id: 456,
//   pgzb_id: 789,
//   pgzbz_id: 101,
//   time: "2023-10-30"
// }

//向oldmantx插入数据,,,,,从请求体中获取前端发送的数据
exports.insertOldmantx=(req, res) => {
  var data = req.body;
  console.log(data);
  const sql = 'INSERT INTO oldmantx (oldmantx_id, oldman_id, danganpack_id, pgzb_id, pgzbz_id,time) VALUES ?';
  const values = data.map(item => [item.oldmantx_id, item.oldman_id, item.danganpack_id, item.pgzb_id, item.pgzbz_id, item.time]);

  pool.query(sql, [values], (err, results) => {
    if (err) {
      return res.send(err.message);
    } else {
      res.send({ message: '数据插入成功。' });
    }
  });
}