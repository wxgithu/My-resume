//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors=require("cors")
/*引入路由模块*/
const index=require("./routes/index");
const details=require("./routes/details");
const products=require("./routes/products")
const users=require("./routes/users")
const cart=require("./routes/cart")
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({
  origin:["http://127.0.0.1:3000","http://localhost:3000"],
  credentials:true
}))
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
  }))
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/details",details);
//接口地址http://localhost:3000/details/?lid=5
app.use("/products",products);
app.use("/users",users);
app.use("/cart",cart);
