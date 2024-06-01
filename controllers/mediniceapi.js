// 梁

let db = require('../database/newsdatabase')

exports.getdata = (req, res) => {
    var sql = 'select * from medicineproducts'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}// ok
exports.medicine_categories = (req, res) => {
    var sql = 'select * from medicine_categories'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}// 中医药类型 ok


exports.getMedicineBycategories = (req, res) => {
    console.log(req.query)
    if (req.query.category == '0') {
        var sql = 'SELECT * FROM medicineproducts ORDER BY RAND() LIMIT 30';
    }
    else {
        var sql = 'select * from medicineproducts where category= ? '
    }
    db.query(sql, req.query.category, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}// 中医药 ok

exports.getcategoriesByid = (req, res) => {
    var sql = 'select category_name from medicine_categories where category = ?'
    db.query(sql, req.query.category, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}


exports.getdata2 = (req, res) => {
    var sql = 'select * from zyfl_table'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.getdata3 = (req, res) => {
    var sql = 'select * from medicinal_table'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.setdata = (req, res) => {
    var sql = 'select id from medicine_categories where category_name = ?'
    db.query(sql, req.query.category_name, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.setdata1 = (req, res) => {
    var sql = 'select zyls1_name from zyls1_table where zyls1_zysl = ?'
    db.query(sql, req.query.zyls1_zysl, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.alldata = (req, res) => {
    var sql = 'select zyls1_id from zyls1_table where zyls1_name = ?'
    db.query(sql, req.query.zyls1_name, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.alldata1 = (req, res) => {
    var sql = 'select * from medicinal_table where medicinal_id = ?'
    db.query(sql, req.query.medicinal_id, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.alldata2 = (req, res) => {
    var sql = 'select * from medicinal_table where medicinal_name = ?'
    db.query(sql, req.query.medicinal_name, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.fordata = (req, res) => {
    var sql = 'select * from medicinal_table'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.setdata2 = (req, res) => {
    var sql = 'select zyls1_name,zyls1_zysl from zyls1_table where zyls1_id = ?'
    db.query(sql, req.query.zyls1_id, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.setdata3 = (req, res) => {
    var sql = 'select zyfl_name from zyfl_table where zyfl_id = ?'
    db.query(sql, req.query.zyfl_id, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.del = (req, res) => {
    var sql = 'delete from medicinal_sctable where username = ? and medicinal_name=?'
    db.query(sql, [req.query.username, req.query.medicinal_name], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        if (data.affectedRows > 0) {
            res.send({
                status: 200,
                message: '删除成功'
            })
        } else {
            res.send({
                status: 202,
                message: '删除失败'
            })
        }
    })
}
exports.addata = (req, res) => {
    var sql = 'insert into medicinal_sctable values (?,?)'
    db.query(sql, [req.query.username, req.query.medicinal_name], (err, data) => {
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
exports.dataset = (req, res) => {
    var sql = 'select * from medicinal_sctable where username = ? and medicinal_name = ?'
    db.query(sql, [req.query.username, req.query.medicinal_name], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.xzdata = (req, res) => {
    var sql = 'select * from medicinal_sctable where username = ?'
    db.query(sql, req.query.username, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}