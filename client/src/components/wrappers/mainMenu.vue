<template>
    <div class="mainMenu">
    <div class="block-menu" v-bind="image">
        <img 
        :src="imgUrl" 
        width=""
        >
        <h4>Первые 3 курса - бесплатно</h4>
       <h1>Профессия Разработчик игр на Unity</h1>
        <p> Вы с нуля освоите игровую разработку: научитесь писать на С#,
            <br> создавать игры на Unity и писать свои дополнения для движка. 
            <br> Сможете создать игру, о которой всегда мечтали, или устроиться
            <br> разработчиком в крутую студию.
         </p>
         <br>
        <button>записаться к курсу</button>
    </div>
    </div>
</template>
<script>

export default {
    name: '',
    props: {
        imgUrl: {
            type: String,
            default: './assets/images/laptop-336373_1920.jpg'
    }
    }


    }

</script>
<style scoped>
.mainMenu{
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 15px;
}
.block{
   font-size: 15px;
   display: flex;
   text-align: inherit;
}
</style>