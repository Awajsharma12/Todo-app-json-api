<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/vue/24/solid"
import { RouterLink } from "vue-router"
import useStudent from "@/composables/studentApi";
import { onMounted } from "vue";

const { todoData, error, statusCode, getAllTodo, destroyTodo } = useStudent();
onMounted(getAllTodo);

const deleteTodo = async (id) => {
  if(!window.confirm("Are you sure ?")){
    return
  }
  await destroyTodo(id)
  await getAllTodo()
}


</script>


<template>
  <div>
    <div class="bg-orange-600 p-4 grid grid-cols-9">
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-white text-center mt-3">
          Todo List
        </h1>
      </div>

      <div class="text-right">
        <RouterLink :to="{ name: 'add'}">
          <button
          class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"
          >
            <UserPlusIcon /> Add
          </button>
        </RouterLink>
      </div>
    </div>

    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg
      font-medium" role="alert" v-if="error">
      Oops! Error encountered: {{ error.message }}
    </div>

    <table class="table-auto w-full" v-else-if="todoData">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">No</th>
          <th class="py-1">Todo</th>
          <th class="py-1">Action</th>
        </tr>
      </thead>

      <tbody class="text-center">
        <tr v-for="({id, task}, i) in todoData" :key="id">
          <td class="py-2">{{ ++i }}</td>
          <td class="py-2">{{task}}</td>
          <td class="py-2">
            <RouterLink :to="{ name: 'view', params: { id: id }}">
              <EyeIcon class="text-blue-500 h-6 w-6 inline" />
            </RouterLink>
            <RouterLink :to="{ name: 'edit', params: { id: id }}">
              <PencilIcon class="text-green-500 h-6 w-6 mx-6 inline" />
            </RouterLink>
            <TrashIcon class="text-red-600 h-6 w-6 inline cursor-pointer" @click="deleteTodo(id)"/>
          </td>
        </tr>  
      </tbody>

    </table>

    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg
      font-medium" role="alert" v-if="statusCode === 200">
      Todo deleted succesfully
    </div>

  </div>

</template>



<style scoped>

</style>