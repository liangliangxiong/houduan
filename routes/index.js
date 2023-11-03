const express = require('express');
const user=require('../controllers/user')
const doctorAndOld=require('../controllers/doctorAndOld')
const evaluate=require('../controllers/evaluate')
const news=require('../controllers/news')

//1.创建路由容器(相当于一个子应用实例)
const router=express.Router();


//2.将路由挂载给路由容器
router.post('/login',user.login)
      .get('/register',user.register)
      .post('/updatePassword',user.updatePassword)
      .get('/doctors',doctorAndOld.getDoctors)
      .get('/elderly_table',doctorAndOld.getElderly)
      .get('/chaxunByid',doctorAndOld.chaxunByid)
      .get('/pgzb_table',evaluate.getPgzb_table)
      .get('/pglx',evaluate.getAllPglx)
      .get('/getPgzb1',evaluate.getPgzbz1)
      .get('/getPgzbz',evaluate.getPgzbz)
      .get('/getPgzb_table_maxID',evaluate.getPgzb_table_maxID)
      .get('/getOldmantx_maxid',evaluate.getOldmantx_maxid)
      .post('/insertOldmantx',evaluate.insertOldmantx)
      .get('/getFourNews',news.getFourNews)
      .get('/getAllNews',news.getAllNews)
      .get('/getNewById',news.getNewById)
      
      

//3.将路由容器挂载到 Express 应用实例生效
module.exports=router