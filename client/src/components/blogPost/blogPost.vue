<template>
    <div class="blog-post">
        <wrapper/>
        <div class="blog-post-item">
              <article>
             <a href=""></a>
                <div class="post-text"> 
                  <div class="post-title">
                        <h3>Soft Wars: прокачиваем soft skills за 7 дней</h3>
                  </div>
                    <div class="text-content">
                        <p>Всё, что нужно знать начинающим создателям игр, — в четырёх лекциях
                            <br> Высшей школы бизнес-информатики НИУ ВШЭ, прошедших в рамках проекта «Университет, открытый городу: Вышка на ВДНХ»
                            <br> Создание компьютерных игр не только интересное, но и прибыльное дело. По прогнозам аналитической компании Newzoo,
                            <br>игровая индустрия по объёмам в этом году превысит $152 млрд, а доходы отдельных игровых компаний уже давно исчисляются в миллиардах долларов.
                            <br>На лекциях преподаватели образовательной программы «Менеджмент игровых проектов» рассказали,
                            <br>как можно выйти на этот рынок и создать свою игру. Они осветили все аспекты разработки, 
                            <br>начиная от набора команды и технической поддержки и заканчивая маркетинговым планом. Всего лекций было четыре:
                            <br>«Построение процессов работы команды для создания игры», «Геймдизайн и креатив в игровой разработке», 
                            <br>«Технические основы разработки», «Релиз близко. Маркетинг за месяц до выхода игры и месяц после».
                            <br>Мы собрали для вас краткий конспект каждого занятия и ссылки на видеозаписи.
                         </p>
                    </div>
                 </div>
         </article>
        </div>
    </div>
</template>
<script>
import Wrapper from '../wrappers/Wrapper.vue'

export default {
    name:'BlogPost',
    components:{
        Wrapper
       
    }
}
</script>
<style scoped>
.post-text {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    align-content: flex-end;
}
.article{
    display: flex;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;
    contain: layout style paint;
    overflow: hidden;
    z-index: 1;
    position: relative; 
    width: 100%;
    font-size: 17px;
    --button-font-size: 16px;
    --input-font-size: 16px;
    --caption-font-size: 14px;
    --code-font-size: 14px;
    --caption-line-height: 1.3;
    --text-line-height: 1.6;
    --text-color: #333;
    --gray-text-color: #585858;
    --light-gray-color: #767676;
    --dark-bg-gray-color: #919191;
    --tproger-color: rgb(4 164 156);
    --tproger-color-hover: #04a49ccf;
    --danger-color: 
}
.post-text{
    width: 100%;
}
.post-text{
    padding: 25px 50px 0;
    margin: 0;
    border-radius: 2px 2px 0 0;
    display: block;
    word-break: break-word;
    margin-top: 25px;
    background: #f1eaea;
    margin-left: 118px;
}
p{
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: var(--font-family);
    font-weight: 500;
    line-height: var(--caption-line-height);
    margin: 10px 0;
    text-rendering: optimizeLegibility;
    color: var(--text-color);
}
.text-content ::before{
padding: 15px 50px 25px;
}
p{
    margin: 0 0 10px;
    font-size: var(--text-font-size);
    line-height: var(--text-line-height);
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.post-title{
    top: -20px;
}
</style>
