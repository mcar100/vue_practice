<template>
  <div class="home-container">
    <h2>Project List</h2>
    <ul class="home-project-list">
      <li v-for="(page, idx) in pageList" :key="`page${idx}`">
        <span>{{ page.pageName }}</span>
        <router-link :to="page.linkName" class="nav-item">GO</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      pageList: [
        { pageName: "Vue Tutorial", linkName: "/shop" },
        { pageName: "ToDoList Remaster", linkName: "/todolist" },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
