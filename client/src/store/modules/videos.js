import axios from 'axios'

export default
{
    //переменные
    state: {
        id: 0,
        url,
        video_name,
        num
    },
    getters: {
        //получение данных
        Get_Video(state, param_id)
        {
            if(param_id == 0)
                return state.id; 

            if(param_id == 1)
                return state.url;
  
            if(param_id == 2)
                return state.video_name;

            if(param_id == 3)
                return state.num;
        }
    },
    mutations: {
        //установка значений в переменные
        Set_Video(state, id, url, video_name, num)
        {
            state.id = id;
            state.url = url;
            state.video_name = video_name;
            state.num = num; 
        }
    },
    actions: {
        //Добавление видео
        ADD_VIDEO({commit}, params)
        {
            axios.post('http://localhost:3000/videos/Add_Video', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },

        //Удаление видео
        DELETE_VIDEO({commit}, params)
        {
            axios.post('http://localhost:3000/videos/Delete_Video', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
    
        //Получение видеороликов из курса
        GET_VIDEOS({commit}, params)
        {
            axios.post('http://localhost:3000/videos/Get_Videos', params)
            .then(function(result)
            {
                commit('Set_Video', result.data.id, result.data.url, result.data.name, result.data.number);
            })
            .catch(function(error)
            {
                console.log(error);
            })
        },

        //Обновление данных видео
        UPDATE_VIDEOS({commit}, params)
        {
            axios.post('http://localhost:3000/videos/Update_Video', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
    }
}