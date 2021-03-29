<template>
    <div class="Wrapper">
        <div class="header">
            <div class="container">
                <div id="logo"></div>
                    <li>
                        <a href="#">UРгрейд</a>
                    </li>
                <ul class="nav">
                    <li>
                        <router-link to="/main">Главная</router-link>
                    </li>
                    <li>
                        <router-link to="/course">Курсы</router-link>
                    </li>
                    <li>
                        <router-link to="/blog">Блог</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name:'Wrapper',
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
       font-size: 28px;
       overflow: hidden;

       background-color:#6e90eec7;

       background-color:#776dfcc7;

       height: 60px;
       box-shadow: 0 0 10px rgba(102, 130, 255, 0.473);
       font-family: sans-serif;
       }

   #logo{
       position: absolute;
       top: 100%;
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
       top: -18px;
   }
   ul.nav li a{
       transition: color 0.2 linear;
       font-size: 18px;
       

   }
   ul.nav li:hover a {
       color: rgb(81, 245, 245);
       transition: 0.3s ease all; 
       
   }
   ul.nav li a{
       padding: 28px;
       color: initial;
       text-decoration: initia;
       -webkit-transition: all 0.4s;
        transition: all 0.4s;
        color: rgba(39, 39, 39, 0.788);
        font-size: 19px;
           

   }
</style>