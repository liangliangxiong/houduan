/**
 * 发现页面新闻模块
 */
let pool=require('../database/db')

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
exports.news_categories = (req, res) => {
    var sql = 'select news_id,news_lb from news_table'
    pool.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}// 中医药类型 ok


exports.getNewsBycategories = (req, res) => {
    console.log(req.query)
    if (req.query.category == '0') {
        var sql = 'SELECT * FROM news_table ORDER BY RAND() LIMIT 30';
    }
    else {
        var sql = 'select * from news_table where category= ? '
    }
    pool.query(sql, req.query.category, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}// 中医药 ok