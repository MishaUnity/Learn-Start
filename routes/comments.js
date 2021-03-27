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


//получение отзывов конкретного пользователя
router.post('/Get_Comment/By_User', function(req, res, next) 
{
  //данные
  var data = [req.body.id];

  //SQL запрос
  db.any('SELECT * FROM comments WHERE user_id = $1', data)
  .then(function(result) 
  {
    var data_to_send = [new comment];

    for(var num = 0; num < result.length; num ++)
    {
        Add_Comment = new comment;
        Add_Comment.id = result[num].id;
        Add_Comment.user_id = result[num].user_id;
        Add_Comment.lesson_id = result[num].lesson_id;
        Add_Comment.text = result[num].comment;

        data_to_send[num] = data_to_send;
    }

    res.send(result);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)    
    console.log(error);
  });
});


//получение всех отзывов о курсе
router.post('/Get_Comment/By_Lesson', function(req, res, next) 
{
  //данные
  var data = [req.body.id];

  //SQL запрос
  db.any('SELECT * FROM comments WHERE lesson_id = $1', data)
  .then(function(result) 
  {
    var data_to_send = [new comment];

    for(var num = 0; num < result.length; num ++)
    {
        Add_Comment = new comment;
        Add_Comment.id = result[num].id;
        Add_Comment.user_id = result[num].user_id;
        Add_Comment.lesson_id = result[num].lesson_id;
        Add_Comment.text = result[num].comment;

        data_to_send[num] = data_to_send;
    }

    res.send(result);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)    
    console.log(error);
  });
});


module.exports = router;