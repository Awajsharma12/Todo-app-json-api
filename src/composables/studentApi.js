import { ref } from "vue";
import axios from "axios";

export default function useStudent() {
    const url = "http://localhost:3333/todos/"

    const todoData = ref([])
    const error = ref(null)
    const statusCode = ref(null)

    //Get all Todo data
    const getAllTodo = async () => {
        todoData.value = []
        error.value = null
        try {
            const res = await axios(url)
            todoData.value = res.data
        } catch (err) {
            console.log(err)
            error.value = err
        }
    }
    //Get single Todo data
    const getSingleTodo = async (id) => {
        todoData.value = []
        error.value = null
        try {
            const res = await axios(url + id)
            todoData.value = res.data
        } catch (err) {
            error.value = err
        }
    }
    //Add studnt data
    const createTodo = async (formData) => {
        todoData.value = []
        error.value = null
        try {
          const config = {
            method: 'POST',
            url: url,
            headers: {
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(formData)
          }
          const res = await axios(config)
          // console.log(res)
          todoData.value = res.data
          
        } catch (err) {
          error.value = err
        }
      }
      //update Todo data
      const updateTodo = async (id, data) => {
        todoData.value = []
        error.value = null
        try {
          const config = {
            method: 'PUT',
            url: url + id,
            headers: {
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
          }
          const res = await axios(config)
          todoData.value = res.data
          statusCode.value = res.status
        } catch (err) {
          error.value = err
        }
      }
      //Delete Todo data
      const destroyTodo = async (id) => {
        todoData.value = []
        error.value = null
        try {
          const config = {
            method: 'DELETE',
            url: url + id,
            headers: {
              'Content-Type': 'application/json'
            }
          }
          const res = await axios(config)
          // console.log(res)
          statusCode.value = res.status
        } catch (err) {
          error.value = err
        }
      }
    

    return {
        todoData,
        error,
        getAllTodo,
        getSingleTodo,
        createTodo,
        updateTodo,
        destroyTodo,
        statusCode
    }

}