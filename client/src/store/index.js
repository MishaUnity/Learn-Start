import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users' 

Vue.use(Vuex);

var store = new Vuex({
    modules:
    {
        users
    }
})

export default store;