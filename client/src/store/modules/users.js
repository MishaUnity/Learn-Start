import axios from 'axios'

export default
{
    //переменные
    state: {
        userId: 0,
        login,
        password,
        user_name,
        surname,
        age
    },
    getters: {
        //получение данных
        USER_ID(state) 
        {
            return state.userId;
        }
    },
    mutations: {
        //установка данных в переменные
        SET_USER_ID(state, id) {
            state.userId = id;
        }
    },
    actions:
    {
        //Авторизация
        LOGIN({commit}, params)
        {
            axios.post('http://localhost:3000/users/Get_User', params)
            .then(function(result)
            {
                commit('SET_USER', result.data.id);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        },
        //Регистрация
        REGISTRATION({commit}, params)
        {
            axios.post('http://localhost:3000/users/Add_User', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
        //Обновление данных
        UPDATE({commit}, params)
        {
            axios.post('http://localhost:3000/users/Update_User', params)
            .catch(function(error)
            {
                console.log(error);
            })
        }
    }
}