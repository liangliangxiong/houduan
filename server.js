const express = require('express');
const router=require('./routes')
const pool = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// 使用body-parser中间件来解析请求体
app.use(bodyParser.json());
app.use(cors());


//挂载路由
// app.use('/api',router)//路由路径都以/api开头
app.use(router)

const port = 3000;
app.listen(port, () => {
  console.log(`服务器运行在端口 ${port}`);

});
