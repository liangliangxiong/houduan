const express = require('express');
const user = require('../controllers/user')
const activity = require('../controllers/activity')
const registration = require('../controllers/registration')

//1.创建路由容器(相当于一个子应用实例)
const router = express.Router();

//2.将路由挂载给路由容器

// 活动相关路由
router.get('/activity/list', activity.getActivityList)
      .get('/activity/:id', activity.getActivityDetail)
      .post('/activity', activity.createActivity)

// 报名相关路由
router.post('/registration', registration.submitRegistration)
      .get('/registration/my', registration.getMyRegistrations)
      .get('/registration/list/:activityId', registration.getActivityRegistrations)

//3.将路由容器挂载到 Express 应用实例生效
module.exports = router