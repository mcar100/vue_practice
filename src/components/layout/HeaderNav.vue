<template>
  <div class="menu">
    <router-link to="/" class="custom-link">Home</router-link>
    <router-link to="/about" class="custom-link">About</router-link>
    <router-link to="/shop" class="custom-link">Shop</router-link>
    <router-link to="/todolist" class="custom-link">ToDoList</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.custom-link {
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
