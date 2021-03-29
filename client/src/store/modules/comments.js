import axios from 'axios'

export default
{
    //переменные
    state: {
        id: 0,
        user_id,
        lesson_id,
        text
    },
    getters: {
        //получение данных
        GET_COMMENT(state, param_id)
        {
            if(param_id == 0)
                return state.id; 

            if(param_id == 1)
                return state.user_id;
  
            if(param_id == 2)
                return state.lesson_id;

            if(param_id == 3)
                return state.text;
        }
    },
    mutations: {
        //установка значений в переменные
        SET_COMMENT(state, id, user_id, lesson_id, text)
        {
            state.id = id;
            state.user_id = user_id;
            state.lesson_id = lesson_id;
            state.text = text; 
        }
    },
    actions: {
        //Получение отзывов конкретного пользователя
        GET_COMMENT_BY_USER({commit}, params)
        {
            axios.post('http://localhost:3000/comments//Get_Comment/By_User', params)
            .then(function(result) 
            {
                commit('Set_Comment', result.data.id, result.data.user_id, result.lesson_id, result.text)
            })
            .catch(function(error)
            {
                console.log(error);
            })
        },

        //Получение отзывов о курсе
        GET_COMMENT_BY_LESSON({commit}, params)
        {
            axios.post('http://localhost:3000/comments//Get_Comment/By_Lesson', params)
            .then(function(result) 
            {
                commit('Set_Comment', result.data.id, result.data.user_id, result.lesson_id, result.text)
            })
            .catch(function(error)
            {
                console.log(error);
            })
        },

        //Создание отзыва
        Add_COMMENT({commit}, params)
        {
            axios.post('http://localhost:3000/comments//Get_Comment/Add_Comment', params)
            .catch(function(error)
            {
                console.log(error);
            })
        }
    }
}