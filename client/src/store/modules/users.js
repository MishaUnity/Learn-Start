import axios from 'axios'

export default
{
    //переменные
    state: {
        UserId: 0,
        Login,
        Password,
        User_name,
        Surname,
        Age
    },
    getters: {
        //получение данных
        Get_User(state, param_id) 
        {
            if(param_id == 0)
                return state.UserId; 

            if(param_id == 1)
                return state.Login;

            if(param_id == 2)
                return state.Password;

            if(param_id == 3)
                return state.User_name;

            if(param_id == 4)
                return state.Surname;

            if(param_id == 5)
                return state.Age;
        }
    },
    mutations: {
        //установка данных в переменные
        Set_User(state, id, login, password, user_name, surname, age)
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