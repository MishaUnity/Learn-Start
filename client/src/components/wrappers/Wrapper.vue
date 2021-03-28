<template>
    <div class="Wrapper">
        <div class="header">
            <div class="container">
                <div id="logo"></div>
                    <li>
                        <a href="#">(здесь будет логотип)</a>
                    </li>
                <ul class="nav">
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="..components/transition.block">Курсы</a>
                    </li>
                    <li>
                        <a href="#"><img src="assets/images/image.jpg" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:'MainPages',
    components:{
          
    }
}
</script>
<style scoped>
   .header{
       width: 100px;
       height: 100%;
       background-color: #abbdefc7;
        top: 0;
        left: 0;
    
   } 
   .container{
       position: relative;
       width: 1400px;
       margin: 0 auto;
       font-size: 14px;
       overflow: hidden;
       background-color:#776dfcc7;
       height: 60px;
       box-shadow: 0 0 10px rgba(102, 130, 255, 0.473);
       font-family: sans-serif;
       }

   #logo{
       position: absolute;
       top: 50%;
       transform: translateY(-50%);
       
       float: left;
       height: 40px;
       width: 170px;
       margin-left: 5px;
   }
   ul.nav{
       float: right;
       list-style: none;
       margin: 0;
       padding: 0;
       
    }
   ul.nav li{
       position: relative;
       float: left;
       
   }
   ul.nav li a{
       transition: color 0.2 linear;
       font-size: 18px;
       

   }
   ul.nav li:hover a {
       color: rgb(48, 76, 138);
       transition: 0.3s ease all; 
   }
   ul.nav li a{
       padding: 21px;
       color: initial;
       text-decoration: initial;
       color: rgb(255, 255, 255);
       transition: 0.3s ease all; 
   }
</style>