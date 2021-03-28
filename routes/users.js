var express = require('express');
var router = express.Router();
var db = require('../bd');

class User
{
  id;
  login; 
  password; 
  name; 
  surname;
  age;
}


//Получение данных пользователя
router.post('/Get_User', function(req, res, next) 
{
  //Класс с данными
  var This_User = new User;
  
  //Пакет данных
  var data = [req.body.login, req.body.password];

  //SQL запрос
  db.any('SELECT * FROM users WHERE login = $1 AND password = $2', data)
  .then(function(result) 
  {
    if(result && result.length == 1)
    {
      //вбивание данных в класс
      This_User.id = result[0].id;
      This_User.login = result[0].login;
      This_User.password = result[0].password;
      This_User.name = result[0].name;
      This_User.surname = result[0].surname;
      This_User.age = result[0].age;
    }
    else
    {
      This_User.id = 0;
    }

    //отправка класса с данными клиенту
    res.send(This_User);
  })
  .catch(function(error) 
  {
    //вывод ошибки(если она появилась)
    console.log(error);
  });
});


//Обновление данных пользователя
router.post('/Update_User', function(req, res, next) 
{ 
  //Пакет данных
  var data = [req.body.password, req.body.name, req.body.surname, req.body.age, req.body.id];

  //SQL запрос
  db.any('UPDATE users SET password = $1, name = $2, surname = $3, age = $4 WHERE id = $5', data)
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


//добавление нового пользователя
router.post('/Add_User', function(req, res, next) 
{
  //данные пользователя
  var data = [req.body.login, req.body.password, req.body.name, req.body.surname, req.body.age];

  //SQL запрос
  db.any('INSERT INTO users (login, password, name, surname, age) VALUES ($1, $2, $3, $4, $5)', data)
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
