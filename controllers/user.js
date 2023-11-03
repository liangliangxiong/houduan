/**
 * 用户处理模块
 */
let pool=require('../database/db')

exports.login = (req, res) => {        //通过id查询数据
    const { username, password } = req.body;

    // 查询数据库中是否存在匹配的用户
    const sql = 'SELECT * FROM login_users WHERE login_id = ? AND login_password = ?';
    pool.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error('数据库查询错误:', err);
        res.json({ message: '内部服务器错误' });
      } else {
        if (results.length > 0) {
          res.json({ message: '登录成功' });
        } else {
          res.json({ message: '用户名或密码错误' });
        }
      }
    });
}

//注册
exports.register=(req,res)=>{
  var sql = 'insert into login_users values (?,?,?)'
  pool.query(sql, [req.query.username, req.query.password, req.query.login_role], (err, data) => {
    if (err) {
      return res.send('错误：' + err.message)
    }
    if (data.affectedRows > 0) {
      res.send({
        status: 200,
        message: 'success'
      })
    } else {
      res.send({
        status: 202,
        message: 'error'
      })
    }
  })
}

//修改账号和密码
exports.updatePassword=(req, res) => {
  const { username, password } = req.body;
  const sql = 'update login_users set login_password=? where login_id=?';
  pool.query(sql, [password, username], (err, data) => {
    if (err) {
      res.send({
        status: 201,
        msg: '操作失败。',
      })
    } else {
      res.send({
        status: 200,
        msg: '密码更新成功。'
      })
    }
  })
}