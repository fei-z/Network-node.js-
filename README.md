# Network-node.js
http://www.jianshu.com/p/db4df1938eca
http://www.tuicool.com/articles/JfqYN3I
http://supportopensource.iteye.com/blog/1415527

安装express

npm install express -g
安装express

npm install express-generator -g
2. 创建工程。进入工程目录，运行命令

express projectName

在终端最后位置 看到输出两个命令

install dependencies:
$ cd APIServer && npm install //告诉我们进入项目根目录 执行npm install安装依赖模块

run the app:
$ DEBUG=APIServer:* npm start //告诉我们启动服务器
3.执行如下命令：

1.cd APIServer //进入项目根目录
2.npm install  //安装依赖
4 启动服务器
npm start

启动完成后终端将输出 node ./bin/www
在浏览器中访问 http://localhost:3000/

/bin: 用于应用启动
/public: 静态资源目录
/routes：可以认为是controller（控制器）目录
/views: jade模板目录，可以认为是view(视图)目录
app.js 程序main文件

// npm install mysql 安装数据库模块
