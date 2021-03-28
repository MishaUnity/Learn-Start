<template>
    <div class="RegistrationForm">
            
        <form v-on:submit.prevent="onSubmit">
        <h2>Регистрация</h2>
        <label></label>
        <input type='text' name='sname'
                class='feedback-input' placeholder='Ваша Фамилия' required ><span></span>
        <br>
        <label></label>
        <input type='text' name='name'
                class='feedback-input' required placeholder='Ваше Имя'><span></span>
        <br>
            <label></label>
        <input type='login' name='login'
                class='feedback-input' required placeholder='Придумайте логин'><span></span>
        <br>
        <label></label>
        <input type='password' name='pass'
                class='feedback-input'
                required placeholder='Введите пароль'><span></span>
        <br>
        <input type='age' name='pass'
                class='feedback-input'
                required placeholder='Введите ваш возвраст'><span></span>
        <br>
        
        <label></label>
        <span></span>
        <button
                class='btn' name="button">Зарегистрироваться</button>
    </form>
    </div>
</template>
<script>

export default {
   name: 'RegistrationForm',
   data() {
       return {
           form: {
               login: '',
               password: '',
               //добавить имя и фамилию
           }
       }
   },
   methods: {
       onSubmit() {
           // добавить вызов действия
           this.$router.push({name: 'login'})
       }
   },
   
}

</script>
<style scoped>
.main-page{
   margin-top: 40px;
   margin-left: 50px;
}
*{font-family:geometria;}
form{background-color:rgba(231, 231, 231, 0.397);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  padding-left:35px;
  padding-right:35px;
  padding-top:35px;
  padding-bottom:50px;
  width: 350px;
  float: left;
  left: 30%;
  position: absolute;
  margin-top:30px;
  margin-left: 100px;
  border-radius: 10px;
}
.feedback-input {
 color:#283944d3;
 font-family: geometria;
 font-weight:300;
 font-size: 18px;
 line-height: 22px;
 background-color: rgba(231, 231, 231, 0.397);
 padding: 13px 13px 13px 5px;
width:100%;
 box-sizing: border-box;
 border: 3px solid rgba(0,0,0,0);
}
.feedback-input:focus{
 background: rgb(202, 202, 202);
 box-shadow: 0 0 5px rgba(0, 0, 0, 0.356);
 border: 2px solid #283944d3;
 color: 6ec4fb;
 padding: 13px 13px 13px 5px;
 transition-timing-function: linear;
   transition-duration: 0.4s;
}
input[type=radio]{
 position: relative;
 display:inline-block;
 margin: 13px 13px 13px 5px;
}
.btn{
 display:block;
 margin:0 auto;
margin-top:50px;
background-color:#000766b6;
height:50px;
width:200px;
font-size:16px;
font-weight:100;
color:white;
border:none;
 cursor:pointer;
border-radius:10px;}
.btn:hover{  box-shadow: 0 0 10px rgba(0,0,0,0.5);
cursor:pointer;
    transition-timing-function: linear;
   transition-duration: 0.2s;
}
h{font-size:20px;
font-weight:500;
color:#006797e7;
Margin-left: center;
margin-top:20px;
}
.ROS{height:150px;}
.inputMaterial:focus ~ input, .inputMaterial:valid ~ input    {
  top:-20px;
  font-size:14px;
  color:#FF0000;
}

</style>