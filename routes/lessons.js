var express = require('express');
var router = express.Router();
var db = require('../bd');

//выдача пользователю курс
router.post('/Give_Lesson', function(req, res, next) 
{
  //индетификаторы пользователя и курса
  var data = [req.body.id, req.body.lesson];

  //SQL запрос
  db.any('INSERT INTO user_lessons (user_id, lesson_id) VALUES ($1, $2)', data)
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

//Создание курса
router.post('/Create_Lesson', function(req, res, next) 
{
  //Первый пакет данных о курсе
  var data_1 = [req.body.userid, req.body.name, req.body.price];

  //SQL запрос
  db.any('INSERT INTO user_lessons (userid, name, price) VALUES ($1, $2, $3)', data_1)
  .then(function(result) 
  {
    res.sendStatus(200);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)
    console.log(error);
  });

  //Второй пакет данных о курсе
  var data_2 = [req.body.url, req.body.lessons];

  //SQL запрос
  for(var num = 0; num < req.body.url.lenght; num ++)
  {
  db.any('INSERT INTO user_lessons (lesson_id, url, name) VALUES (LEFT JOIN , $1, $2)', data_2)
  .then(function(result) 
    {
      res.sendStatus(200);
    })
    .catch(function(error) 
    {
      //вывод ошибки(если она появилась)    
      console.log(error);
    });
  }
});

module.exports = router;