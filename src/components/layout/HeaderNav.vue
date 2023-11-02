<template>
  <div class="menu">
    <a v-for="n in navigator" :key="n">{{ n }}</a>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      navigator: ["Home", "Shop", "About"],
    };
  },
};
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
