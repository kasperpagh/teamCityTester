var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next)
{
    res.render('index', {title: 'Express'});
});


router.get('/test', function(req,res,next)
{
    res.end("hej fra Node og TC... nr 6")
});

module.exports = router;
