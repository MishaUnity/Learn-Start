import axios from 'axios'

export default
{
    state: {
        id : 0,
        owner,
        lesson_name,
        price
    },
    getters: {
        Get_User(state, param_id) 
        {
            if(param_id == 0)
                return state.id; 

            if(param_id == 1)
                return state.owner;

            if(param_id == 2)
                return state.lesson_name;

            if(param_id == 3)
                return state.price;
        }
    },
    mutations: {
        Set_Lesson(state, id, owner, lesson_name, price)
        {
            state.id = id;
            state.owner = owner;
            state.lesson_name = lesson_name;
            state.price = price; 
        }
    },
    actions: {
        GIVE_LESSON({commit}, params)
        {
            axios.post('http://localhost:3000/lessons/Give_Lesson', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
        CREATE_LESSON({commit}, params)
        {
            axios.post('http://localhost:3000/lessons/Create_Lesson', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
        GET_LESSON({commit}, params)
        {
            axios.post('http://localhost:3000/lessons/Get_Lesson', params)
            .then(function(result)
            {
                commit('Set_Lesson', params.data.id, params.data.name, params.data.owner, params.data.price);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        }
    }
}