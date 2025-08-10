/**
 * 活动处理模块
 */
let pool = require('../database/db')

// 获取活动列表
exports.getActivityList = (req, res) => {
    const sql = 'SELECT * FROM activity ORDER BY create_time DESC';
    pool.query(sql, (err, results) => {
        if (err) {
            console.error('数据库查询错误:', err);
            res.status(500).json({ 
                status: 500, 
                message: '内部服务器错误' 
            });
        } else {
            res.json({
                status: 200,
                message: '获取成功',
                data: results
            });
        }
    });
}

// 获取活动详情
exports.getActivityDetail = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM activity WHERE id = ?';
    
    pool.query(sql, [id], (err, results) => {
        if (err) {
            console.error('数据库查询错误:', err);
            res.status(500).json({ 
                status: 500, 
                message: '内部服务器错误' 
            });
        } else {
            if (results.length > 0) {
                res.json({
                    status: 200,
                    message: '获取成功',
                    data: results[0]
                });
            } else {
                res.status(404).json({
                    status: 404,
                    message: '活动不存在'
                });
            }
        }
    });
}

// 新增活动
exports.createActivity = (req, res) => {
    const { title, time, location, quota, description, cover_image } = req.body;
    
    // 验证必填字段
    if (!title || !time || !location || !quota) {
        return res.status(400).json({
            status: 400,
            message: '缺少必填字段'
        });
    }
    
    const sql = 'INSERT INTO activity (title, time, location, quota, description, cover_image) VALUES (?, ?, ?, ?, ?, ?)';
    pool.query(sql, [title, time, location, quota, description, cover_image], (err, results) => {
        if (err) {
            console.error('数据库插入错误:', err);
            res.status(500).json({ 
                status: 500, 
                message: '内部服务器错误' 
            });
        } else {
            res.json({
                status: 200,
                message: '活动创建成功',
                data: { id: results.insertId }
            });
        }
    });
} 