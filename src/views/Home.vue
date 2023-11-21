<template>
  <div class="home-container">
    <h2>Project List</h2>
    <ul class="home-project-list">
      <li>
        <span>Vue Tutorial:</span>
        <router-link to="/shop" class="nav-item">이동</router-link>
      </li>
      <li>
        <span>ToDoList Remaster:</span>
        <router-link to="/todolist" class="nav-item">이동</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style lang="scss"></style>
