<template>
    <div class="authorization">
        <wrapper/>
        <div class="box"> 
      <h1 id="logintoregister">Авторизация</h1>
    <div class="group">      
      <input class="inputMaterial" type="text" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Логин</label>
      </div>
    <div class="group">      
      <input class="inputMaterial" type="password" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Пароль</label>
      </div>
    <div class="group show">      
      <input class="inputMaterial" type="password" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Подтвердите пароль</label>
      </div>
    <div class="group show">      
      <input class="inputMaterial" type="text" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
      </div>    

  <button id="buttonlogintoregister" v-on:click="onSubmit">Войти</button> 
     <nav class="login-link-block">
         <button v-on:click="onRegClicked">Зарегистрироваться</button>
         <button class="forgot-pass-link" href="">
Забыли пароль
         </button>
     </nav>
    </div>
    </div>
</template>
<script>
import Wrapper from '../wrappers/Wrapper.vue'

export default {
  name:'Authorization',
  components:{
    Wrapper
  },
  data() {
      return {
          form: {
              login: '',
              password: '',
          }
      }
  },
  methods: {
    onSubmit() {
        this.$router.push({name: 'main'})
    },
    onRegClicked() {
        this.$router.push({name: 'registration'})
    }
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);

html{
  background-color: #333;
  font-family: "Roboto";
}

/* BOX LOGIN */
.box{
  position: fixed;
  margin: auto;
  height: 365px;
  top: 120px;
  left: 0;
  z-index: 200;
  right: 0;
  width:400px;
  color:#666;
  padding:10px 0px;
  border-radius: 5px;
  background:rgba(238, 238, 238, 0.397);
  border-top: 2px solid #0026a5e7;
  border-bottom: 2px solid #0030cce7;
  margin-bottom: 100px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
.box h1{
  text-align:center;
  font-size:30px;
}

.show{
  display:none;
}

.box button{
  background:#00287ec7;
  border:0;
  color:rgb(255, 255, 255);
  padding: 8px;
  font-size:15px;
  width:330px;
  margin:15px auto;
  display:block;
  cursor:pointer;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;

  border-radius: 12;
}

.box button:active{
  background:#2746ae;
}

.box button:hover{
  background:   #1797ff;
    -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.login-links-block {
  width: 55%;
  margin: 0 auto;
}

.forgot-pass-link,
.reg-link {
  display: inline-block;
  font-size: 14px;
  color: rgb(0, 38, 255);
  margin-left: 159px;
  top: auto;
}

.reg-link {
  border-left: 1px solid    #ccc;
  text-align: center;
}


#textchange{
  cursor:pointer;
  color:#666;
    font-size:15px;
  text-align:center;
}

.group        { 
  position:relative; 
  margin-bottom: 35px; 
  margin-left: 40px;
}

.inputMaterial        {
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}

.inputMaterial:focus    { outline:none;}

/* LABEL ======================================= */

label          {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  border-radius: 10;
}

/* active state */
.inputMaterial:focus ~ label, .inputMaterial:valid ~ label    {
  top:-20px;
  font-size:14px;
  color:#002fff;
}

/* BOTTOM BARS ================================= */
.bar  { position:relative; display:block; width:315px; }
.bar:before, .bar:after   {
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#002fff; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
.inputMaterial:focus ~ .bar:before, .inputMaterial:focus ~ .bar:after {
  width:50%;
}


/* active state */
.inputMaterial:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from { background:#5264AE; }
  to  { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:#4c6be9; }
  to  { width:0; background:transparent; }
}
@keyframes inputHighlighter {
  from { background:#5264AE; }
  to  { width:0; background:transparent; }
}

</style>
