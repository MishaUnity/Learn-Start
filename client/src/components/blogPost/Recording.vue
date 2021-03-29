<template>
    <div class="recording">
        <wrapper/>
         <div class="box">
         <h3>Запись на курсы</h3>
    <hr>
    
    <form action="mailto:nixonblr@tut.by" method="post" name="prosto_forma" enctype="text/plain">
      
      <label>Имя:<br>
        <input type="text" name="name" placeholder="Алексей">
      </label>
      
      <p>Язык программирования:
        <br>
        <label>
          <input type="radio" name="prog_lang" value="C++">C++
        </label>
        <br>
        <label>
          <input type="radio" name="prog_lang" value="Unity">Unity
        </label>
          <br>
        <label>
          <input type="radio" name="prog_lang" value="Python">Python
        </label>
        <br>
        <label>
          <input type="radio" name="prog_lang" value="Web">Web
        </label>
      </p>

      
      <label for="dop_info">Дополнительная информация:
        <br>
        <textarea name="dop_info" id="dop_info" rows=4 cols=35 placeholder="Например: Есть опыт программирования на C++"></textarea>
      </label>
      <br><br>
      
      <label>Секретное слово:
        <br>
        <input type="password" name="password" placeholder="*********">
      </label>
      <br><br>
      
      <input type="submit" value="Отправить">
      <input type="reset" value="Очистить">
      
    </form>
    
    <br>
    <hr> 
    <address></address>
    </div>
    </div>
</template>
<script>
import Wrapper from '../wrappers/Wrapper.vue'
export default {
    name:'Recording',
    components:{
        Wrapper

    }
    
}
</script>
<style scoped>
.h3 {
text-align: center;
}
.box{
  position: fixed;
  margin: auto;
  height: 450px;
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
  font-family: sans-serif;
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
  border-radius: 12;
}

.box button:hover{
  background:   #1797ff;
    -webkit-transition: all 0.4s;
  transition: all 0.4s;
  border-radius: 12;
}    
</style>