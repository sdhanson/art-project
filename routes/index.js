var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    // request('https://api.artsy.net/api', function(error, response, body) {
    //     if(!error && response.statusCode === 200) {
    //         var results = JSON.parse(body);
    //         res.render('index', { title: 'Art Gallery' }, {image: 'default'});
    //
    //     }
    //     else {
            res.render('index', { title: 'Art Gallery' });
        // }
    // });

});

module.exports = router;
