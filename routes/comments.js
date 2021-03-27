var express = require('express');
var router = express.Router();
var db = require('../bd');

class comment
{
    id;
    user_id;
    lesson_id;
    text;
}

//добавление коментария
router.post('/Add_Comment', function(req, res, next) 
{
  //данные
  var data = [req.body.user_id, req.body.lesson_id, req.body.comment];

  //SQL запрос
  db.any('INSERT INTO comments (user_id, lesson_id, comment) VALUES ($1, $2, $3)', data)
  .then(function(result) 
  {
    res.sendStatus(200);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)    
    console.log(error);
  });
});

router.post('/Get_Comment/By_User', function(req, res, next) 
{
  //данные
  var data = [req.body.user_id];

  //SQL запрос
  db.any('SELECT * FROM comments WHERE user_id = &1', data)
  .then(function(result) 
  {
    var data_to_send = [new comment];

    for(var num = 0; num < result.length; num ++)
        data_to_send[num] = result[num];

    res.sendStatus(200);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)    
    console.log(error);
  });
});



module.exports = router;