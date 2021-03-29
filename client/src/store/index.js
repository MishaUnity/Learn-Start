import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users' 
import lessons from './modules/lessons' 
import comments from './modules/comments'
import videos from './modules/videos'

Vue.use(Vuex);

var store = new Vuex({
    modules:
    {
        users,
        lessons,
        comments,
        videos
    }
})

export default store;