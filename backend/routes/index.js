var express = require('express');
var router = express.Router();
var user = require('../Models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', async function(req, res, next){
  try{
    var data = await user.create(req.body)
    res.status(200).json({
      status:'success',
      data
    })
  }
  catch(error){
    res.status(401).json({
      status:'error',
      error
    })
  }
})

module.exports = router;
