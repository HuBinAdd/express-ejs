var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
	console.log(req.params)
	if(req.params[0] == '1217'){
		res.send('你好我是'+req.params[0]);
	}else{
		next();
	}
  
});

router.get('/*', function(req, res, next) {
	console.log(req.params)
  res.send('你好我是链接'+req.params[0]);
});

module.exports = router;
