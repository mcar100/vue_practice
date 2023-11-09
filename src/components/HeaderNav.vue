<template>
  <header class="container">
    <nav class="header-navbar">
      <ul class="nav-menu">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
        <router-link to="/shop" class="nav-item">Shop</router-link>
        <router-link to="/todolist" class="nav-item">ToDoList</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style lang="scss"></style>
