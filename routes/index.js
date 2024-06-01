const express = require('express');
const user = require('../controllers/user')
const doctorAndOld = require('../controllers/doctorAndOld')
const evaluate = require('../controllers/evaluate')
const news = require('../controllers/news')
const findpage=require('../controllers/findpage')

const newsdatabase = require('../controllers/newsdatabase')
// 梁
const mediniceapi = require('../controllers/mediniceapi')

//1.创建路由容器(相当于一个子应用实例)
const router = express.Router();


//2.将路由挂载给路由容器
router.post('/login', user.login)
      .get('/register', user.register)
      .post('/updatePassword', user.updatePassword)
      .get('/doctors', doctorAndOld.getDoctors)
      .get('/elderly_table', doctorAndOld.getElderly)
      .get('/chaxunByid', doctorAndOld.chaxunByid)
      .get('/pgzb_table', evaluate.getPgzb_table)
      .get('/pglx', evaluate.getAllPglx)
      .get('/getPgzb1', evaluate.getPgzbz1)
      .get('/getPgzbz', evaluate.getPgzbz)
      .get('/getPgzb_table_maxID', evaluate.getPgzb_table_maxID)
      .get('/getOldmantx_maxid', evaluate.getOldmantx_maxid)
      .post('/insertOldmantx', evaluate.insertOldmantx)
      .get('/getFourNews', news.getFourNews)
      // .get('/getAllNews',news.getAllNews)
      .get('/getNewById', news.getNewById)

      // findpage页面
      .get('/GetAllNews', findpage.getAllNews)
      .get('/news_categories', findpage.news_categories)
      .get('/getNewsBycategories',findpage.getNewsBycategories)

      
      .get('/GetAllNews', newsdatabase.GetAllNews)
      .get('/GetAllSwipers', newsdatabase.GetAllSwipers)
      .get('/medicineproducts',newsdatabase.medicineproducts)
      .get('/getMedicineBycategories',mediniceapi.getMedicineBycategories)
      .get('/getcategoriesByid',mediniceapi.getcategoriesByid)








      
      // 梁
      .get('/mediniceapi/getdata', mediniceapi.getdata)
      .get('/mediniceapi/medicine_categories', mediniceapi.medicine_categories)
      .get('/mediniceapi/getdata2', mediniceapi.getdata2)
      .get('/mediniceapi/getdata3', mediniceapi.getdata3)
      .get('/mediniceapi/setdata', mediniceapi.setdata)
      .get('/mediniceapi/setdata1', mediniceapi.setdata1)
      .get('/mediniceapi/alldata', mediniceapi.alldata)
      .get('/mediniceapi/alldata1', mediniceapi.alldata1)
      .get('/mediniceapi/alldata2', mediniceapi.alldata2)
      .get('/mediniceapi/fordata', mediniceapi.fordata)
      .get('/mediniceapi/setdata2', mediniceapi.setdata2)
      .get('/mediniceapi/setdata3', mediniceapi.setdata3)
      .get('/mediniceapi/del', mediniceapi.del)
      .get('/mediniceapi/addata', mediniceapi.addata)
      .get('/mediniceapi/dataset', mediniceapi.dataset)
      .get('/mediniceapi/xzdata', mediniceapi.xzdata)



//3.将路由容器挂载到 Express 应用实例生效
module.exports = router