# Mean Pro

利用mongodb， express， angular， node实现一个简单的webapp。SPA。主要就是应付个毕设就好了

## 主要(或者将用)的技术
**angular** 前端mvc

**express** 后台框架

**jade** 前端模板

**gulp** js管理

**mocha** 单元测试

**bootstrap** UI界面

**mongo** 数据库

    重要的事情说三遍：
    
    jade在这里不适用！ jade在这里不适用！ jade在这里不适用！
    
    只是单纯为了jade而jade。
    现情况，路由加载是由angular跳转请求后台，由后台渲染并render过去browser的view文件
    实际生产环境，如果希望angular的route去控制跳转，使用纯html来让angular去加载更为合适。
	没有template engine的版本在另一分支，等这个做完了再更新那个分支

## 目录结构

**app.js** express的配置文件

**bower.json** 前端依赖

**package.json** npm依赖

**gulpfile.js** gulp文件，主要包含css压缩，js压缩，nodemon和livereload等。

**app** 主要放后台文件，如后台路由，views模板, mongodb的model等。

**bin** 启动文件夹，包含启动脚本

**config** 包含配置文件，build-config.js用于gulp，db-config.js用于mongodb，db-init.js用于初始化数据库(手动执行), session-config.js用于session配置，admin.json是管理员账号密码，可手工修改(密码需要sha256加密)

**public** 包含静态文件，css和js等。分assets和dist两个目录，assets用于开发环境，dist用于生产环境(即使用压缩后的js跟css)

**test** 包含测试用例(有毛病)

## 使用

1. `npm install & bower install   //下载bower跟npm依赖`
2. `gulp  //启动`

访问127.0.0.1:3000 即可看到了。	

## 备注

这个project还没有做完！

(单元测试没有写完，还没有调完bug，angular的路由还需仔细考虑下没有完成)