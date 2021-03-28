var express = require('express');
var router = express.Router();
var db = require('../bd');

class lesson
{
  id;
  owner;
  name;
  price;
}

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

//получение уроков пользователя
router.post('/User_Lessons', function(req, res, next) 
{
  //индетификатор пользователя
  var data = [req.body.id];

  //SQL запрос
  db.any('SELECT lesson_id FROM user_lessons WHERE user_id = $1', data)
  .then(function(result) 
  {
    res.send(result);
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
  var data_1 = [req.body.userid, req.body.name, req.body.price, req.body.url, req.body.lessons];

  //SQL запрос
  db.any('INSERT INTO lessons (userid, name, price) VALUES ($1, $2, $3) RETURNING id', data_1)
  .then(function(result) 
  {
    var lesson = { id: result[0].id }

    res.send(lesson);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)
    console.log(error);
  });
});


//Получение курса по id
router.post('/Get_Lesson', function(req, res, next) 
{
  //Первый пакет данных о курсе
  var data = [req.body.id];

  //SQL запрос
  db.any('SELECT * FROM lessons WHERE id = $1', data)
  .then(function(result) 
  {
    var Get_lesson = new lesson;

    Get_lesson.id = result[0].id;
    Get_lesson.name = result[0].name;
    Get_lesson.owner = result[0].userid;
    Get_lesson.price = result[0].price;

    res.send(Get_lesson);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)
    console.log(error);
  });
});

module.exports = router;