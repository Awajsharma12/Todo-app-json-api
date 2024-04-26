<script setup>
import { reactive } from 'vue'
import { RouterLink } from "vue-router"
import useStudent from "../../composables/studentApi";
const { todoData, error, createTodo } = useStudent();

const formData = reactive({
  task: "",
})

const handleAddTodoForm = async () => {
  await createTodo(formData);
}

</script>



<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Add TODO</h1>
    </div>

    <form
      @submit.prevent="handleAddTodoForm"
      class="w-full"
      id="AddTodoForm"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="task"> Task : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="task"
            v-model.trim="formData.task"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Enter task"
            required
          />
        </div>
      </div>
      

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6"
        >
          Add
        </button>

        <RouterLink :to="{ name: 'list' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back to Home
          </button>
        </RouterLink>
      </div>

    </form>
  

  </div>

</template>



<style scoped>

</style>