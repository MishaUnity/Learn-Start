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
}

//Получение данных пользователя
router.post('/Get_User', function(req, res, next) 
{
  //Класс с данными
  var This_User = new User;

  //SQL запрос
  db.any('SELECT * FROM users WHERE login = "Misha_Unity"')
  .then(function(result) 
  {
    //вбивание данных в класс
    /*
    This_User.id = result[0].id;
    This_User.login = result[0].login;
    This_User.password = result[0].password;
    This_User.name = result[0].name;
    This_User.surname = result[0].surname;
    This_User.age = result[0].age;
    */

    //отправка класса с данными клиенту
    res.send(result);
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
  var data = [req.body.login, req.body.password, req.body.name, req.body.surname, req.body.age, req.body.activiti];

  //SQL запрос
  db.any('INSERT INTO users (login, password, name, surname, age, activite) VALUES ($1, $2, $3, $4, $5, $6)', data)
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
