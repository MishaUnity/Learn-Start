<template>

    <div class="main-page">
        <wrapper/>
        <main-menu/>
   <div class="image">
       
   </div>
    
</div>

</template>
<script>
import MainMenu from '../wrappers/mainMenu.vue'
import Wrapper from '../wrappers/Wrapper.vue'
export default {
     name: 'MainPage',
  components: { 
      Wrapper,
      MainMenu
      },
  
    }

</script>
<style scoped>
.body{
    width: 1980px;
    height: 900px;
    display: block;
    position: absolute;
  
}

</style>
