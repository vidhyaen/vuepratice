<template>
  <div>
    <h1>Todo</h1>
    <input v-model="todo" class="form-control p-2" name="name" />
    <button type="submit" class="btn btn-success mt-2" @click="addTodo">
      ADD
    </button>
    <div v-if="errors !== ''" id="errors">{{errors}}</div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "App",
  data() {
    return {
      todo: "",
      errors: "",
    };
  },
  methods: {
    addTodo: function() {
      this.errors = "";
      console.log("todo" + this.todo);
      if (this.todo !== "") {
       this.todo="Hi"
      } else {
        this.errors = "Enter a todo";
      }
    },
  },
};
</script>

<style></style>
