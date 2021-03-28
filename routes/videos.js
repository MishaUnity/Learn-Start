var express = require('express');
var router = express.Router();
var db = require('../bd');

class video
{
    id;
    url;
    name;
}

//Добовление видео в курс
router.post('/Add_Video', function(req, res, next) 
{
  //индетификаторы пользователя и курса
  var data = [req.body.lesson_id, req.body.url, req.body.name];

  //SQL запрос
  db.any('INSERT INTO videos (lesson_id, url, name) VALUES ($1, $2, $3)', data)
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
  db.any('Select id, url, name FROM videos WHERE lesson_id = $1', data)

  .then(function(result) 
  {
    for(var num = 0; num < result.length; num ++)
    {
        var new_video = new video;
        new_video.id = result[num].id;
        new_video.url = result[num].url;
        new_video.name = result[num].name;

        videos[num] = new_video;
    }

    res.send(videos);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)    
    console.log(error);
  });
});

module.exports = router;