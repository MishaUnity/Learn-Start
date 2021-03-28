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
        Get_User(state, param_id) 
        {
            if(param_id == 0)
                return state.userId; 

            if(param_id == 1)
                return state.login;

            if(param_id == 2)
                return state.password;

            if(param_id == 3)
                return state.user_name;

            if(param_id == 4)
                return state.surname;

            if(param_id == 5)
                return state.age;
        }
    },
    mutations: {
        //установка данных в переменные
        SET_USER(state, id, login, password, user_name, surname, age)
        {
            userId = id;
            state.login = login;
            state.password = password;
            state.user_name = user_name;
            state.surname = surname;
            state.age = age;
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
                commit('SET_USER', result.data.id, result.data.login, result.data.password, result.data.name,
                result.data.surname, result.data.age);
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