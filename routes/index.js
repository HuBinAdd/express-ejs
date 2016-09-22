var express = require('express');
var request = require('request');
var router = express.Router();




router.get('/login', function(req, res, next) {
    //获得POST请求参数
    res.render('login');
});


router.post('/login', function(req, res, next) {
    if(req.body.useId == 'admin' && req.body.password == '123456'){
        req.session.useId = req.body.useId;
        res.send('success');
    }else{
        res.send('error');
    };


});

/* GET home page. */
router.get('/*', function(req, res, next) {
    //获得POST请求参数
    if (!req.session || !req.session.useId) {
       res.redirect('/login');
    }else{
        next();
    }

});
/* GET home page. */
router.get('/', function(req, res, next) {   
     var options = {
        headers: {"Connection": "close"},
        url: 'http://m.xuechela.com/DriverSchool/driverSchoolList',
        method: 'POST',
        json: true,
        form: {
            city:'',
			page:'1'
        }
    },options1 = {
        headers: {"Connection": "close"},
        url: 'http://m.xuechela.com/Article/articleList',
        method: 'POST',
        json: true,
        form: {
            city:'hangzhou',
            className:'hangyezixun',
			page:'1'
        }
    };
    request(options,function(error, response, data){
        if (!error && response.statusCode == 200) {   
			request(options1,function(error1, response1, data1){
		        if (!error && response.statusCode == 200) {
		    		res.render('index', {list : data,xuec : data1});
		        }
		    });
        }
    });
});

/* GET home page. */
router.post('/path/to/postFile', function(req, res, next) {
    //获得POST请求参数
    console.log(req.body.param1);
    res.json({ title1: 'nima' });
});
/* GET home page. */
router.get('/path/to/getFile', function(req, res, next) {
    //获得GET请求参数
    console.log(req.query.param1);
    res.json({ title1: 'nima' });
});

module.exports = router;
