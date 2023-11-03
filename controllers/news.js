/**
 * 新闻模块
 */
let pool=require('../database/db')

//获取新闻的id和图片，只获取四条数据
exports.getFourNews=(req,res)=>{
    var sql = 'SELECT news_id,news_tp FROM news_table LIMIT 4'
    pool.query(sql, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      }
      res.send(data)
    })
}

//拿到全部的新闻
exports.getAllNews=(req,res)=>{
    var sql = 'SELECT * FROM news_table'
    pool.query(sql, (err, data) => {
      if (err) {
        return res.send('错误：' + err.message)
      }
      res.send(data)
    })
}

//获取对应id编号的新闻
exports.getNewById=(req,res)=>{
    const newsID = req.query.news_id;
    const sql = 'SELECT * FROM news_table WHERE news_id = ?';
    pool.query(sql, [newsID], (err, result) => {
      if (err) {
        return res.send('错误：' + err.message)
      } else if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.json({ error: '未找到新闻' });
      }
    });
}