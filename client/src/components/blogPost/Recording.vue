<template>
    <div class="recording">
        <wrapper/>
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
          <input type="radio" name="prog_lang" value="PHP">PHP
        </label>
          <br>
        <label>
          <input type="radio" name="prog_lang" value="Python">Python
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