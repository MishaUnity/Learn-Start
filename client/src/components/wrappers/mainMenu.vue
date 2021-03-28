<template>

        
    <div class="mainMenu">
        
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
        <button>Записаться на курс</button>
    </div>
   </div>
    </div>
</template>
<script>

export default {
    name: '',
    


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
    font-weight: 400
}
button{
    display: inline-block;
    margin-right: 20px;
    padding: 20px 48px;
    border-radius: 12px;
    background-color: #6654d9;
    color: #fff;
    font-size: 10px;
    line-height: 1;
    font-weight: 600px;
    text-decoration: none
}
.text{
    top: -40px;

}
</style>