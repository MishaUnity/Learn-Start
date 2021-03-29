<template>
    <div class="mainMenu">
        <background/>
    <div class="block-menu" v-bind:style="{backgroundImage: 'url(./components/assets/images/logo.jpg)'}">
    <div class="text">
       <h1>Профессия Разработчик игр на Unity</h1>
        <p> Мечтаете создать игру со своим сюжетом, дисплеем и графикой? Хотите придумать 
            <br> и раскрутить игру с нуля, без каких-либо умений и научится писать на C#, 
            <br> как профессиональный программист? На данном курсе "Unity" вас научат делать игры с нуля. 
            <br> В будущем вы сможете устроится на высокооплачиваемую работу и сможете создать игру на рaвне
            <br> с такими играми как: Rust, Firewatch, Pokémon Go и прочее.
         </p>
         <br>
        <button><router-link to="/Recrding">Записаться курсы</router-link></button>
    </div>
   </div>
    </div>
</template>
<script>
import background from '../background/background'
export default {
    name: '',
    components: {
        background
    }


    }

</script>
<style scoped>
.mainMenu{
    text-align: left;
    display: flex;
    font-size: 15px;
    
    
}
h1{
    margin: 0 0 32px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: -1px;
}
p{
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 400px;
    margin-left: 35px;
    margin-top: 20px;
}
button{
    display: inline-block;
    margin-left: 60px;
    padding: 16px 35px;
    border-radius: 12px;
    background-color: #6654d9;
    color: #fff;
    font-size: 13px;
    line-height: 1;
    font-weight: 600px;
    text-decoration: none

}
.text{
    margin-left: 35px;
    margin-top: 89px;
    top: -40px;
}
</style>