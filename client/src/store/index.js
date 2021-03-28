import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users' 
import lessons from './modules/lessons' 

Vue.use(Vuex);

var store = new Vuex({
    modules:
    {
        users,
        lessons
    }
})

export default store;