
//包含user文件夹
var user = require('./user');
var express = require('express');
var router = express.Router();
//获取url参数 依赖于url模块 使用前需要使用  require('url')
//var params = URL.parse(req.url, true).query;
var URL = require('url');


var userDao = require('../dao/userDao');

// 增加用户
router.get('/addUser', function(req, res, next) {
	userDao.add(req, res, next);
});




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/getUserInfo', function(req, res, next) {

    var userdata = new user();
    var params = URL.parse(req.url, true).query;

 if(params.id == '1') {

    userdata.name = "ligh";
    userdata.age = "1";
    userdata.city = "北京市";

}else{    
    userdata.name = "SPTING";
    userdata.age = "1";
    userdata.city = "杭州市";
}

  var response = {status:1,data:userdata};
  res.send(JSON.stringify(response));

});

module.exports = router;
