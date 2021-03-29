var express = require('express');
var router = express.Router();
var db = require('../bd');

class video
{
  id;
  url;
  name;
  number;
}

//Добовление видео в курс
router.post('/Add_Video', function(req, res, next) 
{
  //индетификаторы пользователя и курса
  var data = [req.body.lesson_id, req.body.url, req.body.name, req.body.num];

  //SQL запрос
  db.any('INSERT INTO videos (lesson_id, url, name, num) VALUES ($1, $2, $3, $4)', data)
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

//Удаление видеоролика
router.post('/Delete_Video', function(req, res, next) 
{
  //индетификаторы пользователя и курса
  var data = [req.body.id];

  //SQL запрос
  db.any('DELETE FROM videos WHERE id = $1', data)
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

//Получение всех видеороликов из курса
router.post('/Get_Videos', function(req, res, next) 
{
  //индетификаторы курса
  var data = [req.body.id];

  var videos = [new video];

  //SQL запрос
  db.any('Select id, url, name, num FROM videos WHERE lesson_id = $1', data)

  .then(function(result) 
  {
    for(var i = 0; i < result.length; i ++)
    {
        var new_video = new video;
        new_video.id = result[i].id;
        new_video.url = result[i].url;
        new_video.name = result[i].name;
        new_video.number = result[i].num;

        videos[i] = new_video;
    }

    res.send(videos);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)    
    console.log(error);
  });
});

//Update video
router.post('/Update_Video', function(req, res, next) 
{
  //индетификатор видео
  var data = [req.body.id, req.body.url, req.body.name, req.body.num];

  //SQL запрос
  db.any('UPDATE videos SET name = $3, url = $2, num = $4 WHERE id = $1', data)

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

module.exports = router;