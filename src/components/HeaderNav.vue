<template>
  <header class="container">
    <nav class="header-navbar">
      <ul class="nav-menu">
        <router-link to="/home" class="nav-item">Home</router-link>
        <router-link to="/tutorial" class="nav-item">Tutorial</router-link>
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
