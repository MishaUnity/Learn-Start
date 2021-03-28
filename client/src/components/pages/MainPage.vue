<template>

    <div class="main-page">
        <div class="container">

        <wrapper/>
        <main-menu/>
        <background/>
   <div class="image">
    </div>
   </div>
    
</div>

</template>
<script>
import MainMenu from '../wrappers/mainMenu.vue'
import Wrapper from '../wrappers/Wrapper.vue'
import background from '../background/background'
export default {
     name: 'MainPage',
  components: { 
      Wrapper,
      MainMenu,
      background
      },
  
    }

</script>
<style scoped>
.body{
    width: 1980px;
    height: 900px;
    display: block;
    position: absolute;
    background-color: rgba(96, 176, 196, 0.315);
  
}
.mainpage {
    background-color: rgba(96, 176, 196, 0.315);
}

</style>
