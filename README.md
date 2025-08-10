# 活动报名系统后端

## 项目介绍

这是一个基于Node.js + Express + MySQL的活动报名系统后端API服务。系统提供活动管理、用户报名、报名记录查询等功能，支持活动发布、用户报名、管理员查看报名列表等核心业务场景。

## 技术栈

- **运行环境**: Node.js
- **Web框架**: Express.js
- **数据库**: MySQL
- **数据库驱动**: mysql2
- **中间件**: 
  - body-parser (请求体解析)
  - cors (跨域支持)
- **开发工具**: nodemon (热重载)

## 项目结构

```
houduan/
├── app.js                 # 应用入口文件
├── package.json           # 项目依赖配置
├── README.md             # 项目说明文档
├── controllers/          # 控制器目录
│   ├── user.js          # 用户相关控制器
│   ├── activity.js      # 活动相关控制器
│   └── registration.js  # 报名相关控制器
├── routes/              # 路由目录
│   └── index.js         # 路由配置
├── database/            # 数据库配置
│   └── db.js           # 数据库连接配置
└── HTML/               # HTML文件目录
    └── hello.html      # 示例HTML文件
```

## 数据库设计

### 活动表 (activity)
- `id`: 活动ID (主键)
- `title`: 活动标题
- `time`: 活动时间
- `location`: 活动地点
- `quota`: 总名额
- `current_count`: 当前报名人数
- `description`: 活动介绍
- `cover_image`: 封面图片URL
- `create_time`: 创建时间
- `update_time`: 更新时间

### 报名表 (registration)
- `id`: 报名ID (主键)
- `activity_id`: 活动ID (外键)
- `name`: 报名人姓名
- `phone`: 手机号
- `remark`: 备注
- `status`: 报名状态 (pending/approved/rejected)
- `create_time`: 报名时间


## 安装和运行

### 环境要求
- Node.js (版本 14.0.0 或更高)
- MySQL (版本 8.0 或更高)

### 安装步骤

1. **克隆项目**
```bash
git clone <https://github.com/liangliangxiong/houduan.git>
cd houduan
```

2. **安装依赖**
```bash
npm install
```

3. **配置数据库**
   - 确保MySQL服务已启动
   - 创建数据库 `booking_app`
   - 导入数据库文件 `booking_app.sql`
   - 修改 `database/db.js` 中的数据库连接信息

4. **启动服务**
```bash
# 开发模式（热重载）
npm run dev

# 生产模式
npm start
```

5. **验证服务**
   - 服务默认运行在 `http://localhost:3000`
   - 访问 `http://localhost:3000/api/activity/list` 测试接口

### 数据库配置

修改 `database/db.js` 文件中的数据库连接信息：

```javascript
const pool = mysql.createPool({
  host: 'localhost',           // 数据库主机
  user: 'root',               // 数据库用户名
  password: 'your_password',  // 数据库密码
  database: 'booking_app',    // 数据库名
});
```

## 开发说明

### 添加新接口
1. 在 `controllers/` 目录下创建或修改控制器文件
2. 在 `routes/index.js` 中添加路由配置
3. 重启服务或使用 `npm run dev` 热重载

### 错误处理
所有接口都包含统一的错误处理机制：
- 400: 请求参数错误
- 404: 资源不存在
- 500: 服务器内部错误

### 响应格式
所有接口都返回统一的JSON格式：
```json
{
  "status": 200,      // 状态码
  "message": "成功",   // 消息
  "data": {}          // 数据
}
```

## 注意事项

1. **安全性**: 生产环境请配置适当的安全措施
2. **数据库**: 定期备份数据库数据
3. **日志**: 生产环境建议添加日志记录
4. **性能**: 大量数据时考虑添加分页功能
5. **验证**: 建议添加更完善的输入验证和权限控制

## 许可证

ISC License 