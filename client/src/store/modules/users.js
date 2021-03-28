import axios from 'axios'

export default
{
    state: {
        userId: 0,
        login,
        password,
        user_name,
        surname,
        age
    },
    getters: {
        USER_ID(state) 
        {
            return state.userId;
        }
    },
    mutations: {
        SET_USER_ID(state, id)
        {
            userId = id;
        },
        SET_USER(state, id, login, password, user_name, surname, age)
        {
            userId = id;

        }
    },
    actions:
    {
        LOGIN({commit}, params)
        {
            axios.post('http://localhost:3000/users/Get_User', params)
            .then(function(result)
            {
                commit('SET_USER_ID', result.data.id)
            })
            .catch(function(error)
            {
                console.log(error);
            })
        },
        REGISTRATION({commit}, params)
        {
            axios.post('http://localhost:3000/users/Add_User', params)
            .catch(function(error)
            {
                console.log(error);
            })
        }
    }
}