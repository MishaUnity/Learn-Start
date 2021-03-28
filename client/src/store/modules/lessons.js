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

    },
    mutations: {

    },
    actions: {
        Give_Lesson({commit}, params)
        {
            axios.post('http://localhost:3000/lessons/Give_Lesson', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
        Create_Lesson({commit}, params)
        {
            axios.post('http://localhost:3000/lessons/Create_Lesson', params)
            .catch(function(error)
            {
                console.log(error);
            })
        },
        Get_Lesson({commit}, params)
        {
            axios.post('http://localhost:3000/lessons/Get_Lesson', params)
            .then(function(result)
            {
                
            })
            .catch(function(error)
            {
                console.log(error);
            })
        }
    }
}