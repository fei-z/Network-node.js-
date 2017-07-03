var user = require('./user');
var express = require('express');
var router = express.Router();
var URL = require('url');



router.get('/getUserData', function(req, res, next) {

    var userdata = new user();
    var params = URL.parse(req.url, true).query;
    if(params.id == '1') {
        userdata.name = "fei";
        userdata.age = "1";
        userdata.city = "北京市";
    }
    else{    
        userdata.name = "fei";
        userdata.age = "1";
        userdata.city = "杭州市";
    }   
 
  var response = {status:1,data:userdata};
  res.send(JSON.stringify(response));

});

module.exports = router;