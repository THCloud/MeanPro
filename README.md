# Mean Pro

利用mongodb， express， angular， node实现一个简单的webapp。单页应用。主要就是应付个毕设就好了

## 主要(或者将用)的技术
**angular** 前端mvc

**express** 后台框架

**jade** 前端模板

**gulp** js管理

**bootstrap** UI界面

**mongo** 数据库

    重要的事情说三遍：
    
    jade在这里不适用！ jade在这里不适用！ jade在这里不适用！
    
    只是单纯为了jade而jade。过一阵会同步一个不用jade的版本。
    将前端文件放到public目录下，由express的static中间件使用，更适合实际生产环境 

## 目录结构

**app.js** express的配置文件

**bower.json** 前端依赖

**package.json** npm依赖

**gulpfile.js** gulp文件，主要包含css压缩，js压缩，nodemon和livereload等。

**app** 主要放后台文件，如后台路由，views模板, mongodb的model等。(model还没有弄)

**bin** 启动文件夹，包含启动脚本

**config** 包含配置文件，build-config.js用于gulp，db-config.js用于mongodb(没有弄)

**public** 包含静态文件，css和js等。分assets和dist两个目录，assets用于开发环境，dist用于生产环境(即使用压缩后的js跟css)

## 使用

1. `npm install & bower install   //下载bower跟npm依赖`
2. `gulp  //启动`

访问127.0.0.1:3000 即可看到了。	

>本人犯懒没有配置gitignore，所以bower依赖跟npm依赖也上传上去了，步骤1可省

## 备注
这个project还没有做完！
