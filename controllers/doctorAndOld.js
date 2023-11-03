/**
 * 医生模块
 */
let pool=require('../database/db')

exports.getDoctors=(req,res)=>{//用于获取医生数据
    const query = 'SELECT * FROM doctor_tabe';
    pool.query(query, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      } else {
        res.send(data);
      }
    });
}

exports.getElderly=(req,res)=>{//获取老人基本数据
  var sql = 'select * from elderly_table'
  pool.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.json(data)
  })
}

//根据 id 来查询是否由这个老人
exports.chaxunByid=(req,res)=>{
  var sql = 'select id from elderly_table where username=?'    //？用于占位
  pool.query(sql, [req.query.username], (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}