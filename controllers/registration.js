/**
 * 报名处理模块
 */
let pool = require('../database/db')

// 提交报名
exports.submitRegistration = (req, res) => {
    const { activity_id, name, phone, remark, openId } = req.body;
    
    // 验证必填字段
    if (!activity_id || !name || !phone) {
        return res.status(400).json({
            status: 400,
            message: '缺少必填字段'
        });
    }
    
    // 首先检查活动是否存在且有名额
    const checkActivitySql = 'SELECT * FROM activity WHERE id = ?';
    pool.query(checkActivitySql, [activity_id], (err, activityResults) => {
        if (err) {
            console.error('数据库查询错误:', err);
            return res.status(500).json({ 
                status: 500, 
                message: '内部服务器错误' 
            });
        }
        
        if (activityResults.length === 0) {
            return res.status(404).json({
                status: 404,
                message: '活动不存在'
            });
        }
        
        const activity = activityResults[0];
        if (activity.current_count >= activity.quota) {
            return res.status(400).json({
                status: 400,
                message: '活动名额已满'
            });
        }
        
        // 检查是否已经报名过
        const checkRegistrationSql = 'SELECT * FROM registration WHERE activity_id = ? AND phone = ?';
        pool.query(checkRegistrationSql, [activity_id, phone], (err, regResults) => {
            if (err) {
                console.error('数据库查询错误:', err);
                return res.status(500).json({ 
                    status: 500, 
                    message: '内部服务器错误' 
                });
            }
            
            if (regResults.length > 0) {
                return res.status(400).json({
                    status: 400,
                    message: '您已经报名过此活动'
                });
            }
            
            // 插入报名记录
            const insertSql = 'INSERT INTO registration (activity_id, name, phone, remark) VALUES (?, ?, ?, ?)';
            pool.query(insertSql, [activity_id, name, phone, remark], (err, insertResults) => {
                if (err) {
                    console.error('数据库插入错误:', err);
                    return res.status(500).json({ 
                        status: 500, 
                        message: '内部服务器错误' 
                    });
                }
                
                // 更新活动的当前报名人数
                const updateActivitySql = 'UPDATE activity SET current_count = current_count + 1 WHERE id = ?';
                pool.query(updateActivitySql, [activity_id], (err, updateResults) => {
                    if (err) {
                        console.error('更新活动人数错误:', err);
                    }
                    
                    res.json({
                        status: 200,
                        message: '报名成功',
                        data: { id: insertResults.insertId }
                    });
                });
            });
        });
    });
}

// 获取我的报名记录
exports.getMyRegistrations = (req, res) => {
    const { openId } = req.query;
    
    if (!openId) {
        return res.status(400).json({
            status: 400,
            message: '缺少openId参数'
        });
    }
    
    // 这里假设通过手机号来关联用户，实际项目中可能需要用户表
    const sql = `
        SELECT r.*, a.title, a.time, a.location 
        FROM registration r 
        JOIN activity a ON r.activity_id = a.id 
        WHERE r.phone = ? 
        ORDER BY r.create_time DESC
    `;
    
    pool.query(sql, [openId], (err, results) => {
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

// 获取某个活动的报名列表
exports.getActivityRegistrations = (req, res) => {
    const { activityId } = req.params;
    
    const sql = 'SELECT * FROM registration WHERE activity_id = ? ORDER BY create_time DESC';
    
    pool.query(sql, [activityId], (err, results) => {
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