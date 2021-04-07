<template>
  <div class="container">
    <h1 class="text-center">Todo</h1>
    <p class="text-center">Title</p>
    <div v-bind:key="todos.id" v-for="todos in todo" class="text-center">
      <input type="checkbox" v-on:change="markComplete" class="checkbox" /> {{ todos.title }}
     
    </div>
    <TodoItems v-bind:todos="todos" />
  </div>
</template>
<script>
import TodoItems from "./TodoItems.vue";

export default {
  name: "Todo",
  components: {
    TodoItems,
  },
  props: ["todo"],
};
</script>
<style scoped></style>
