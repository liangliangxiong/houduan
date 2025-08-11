
/**
 * 用户模块
 */
let pool = require('../database/db')
//登陆
exports.login = (req, res) => {
    const { username, password } = req.body;

    // 验证必填字段
    if (!username || !password) {
        return res.status(400).json({
            status: 400,
            message: '缺少必填字段'
        });
    }
    const loginSql = 'select * from users where username=? and password=?';
    pool.query(loginSql, [username, password], (err, result) => {
        if (err) {
            return res.status(500).json({
                status: 500,
                message: '内部服务器错误'
            })
        }
        if (result.length === 0) {
            return res.status(401).json({
                status: 401,
                message: '用户名或密码错误'
            })
        }
        res.json({
            status: 200,
            message: '登录成功',
            data: result
        })
    })
}