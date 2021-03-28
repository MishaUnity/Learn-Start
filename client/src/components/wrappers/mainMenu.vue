<template>

        
    <div class="mainMenu">
        
    <div class="block-menu" v-bind="image">
        
        <h4>Первые 3 курса - бесплатно</h4>
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
    flex-direction: column;
    font-size: 15px;
}
.block{
   font-size: 15px;
   display: flex;
   text-align: inherit;
}
button {
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(rgba(0, 31, 172, 0.726), rgba(50, 49, 110, 0.664));
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex;
    cursor: default;
    background-color: -internal-light-dark(rgba(0, 31, 172, 0.726), rgba(50, 49, 110, 0.664));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
</style>