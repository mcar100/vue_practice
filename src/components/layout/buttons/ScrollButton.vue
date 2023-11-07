<template>
  <button class="move-top-btn" @click="scrollToTop">up</button>
</template>
<script>
export default {
  name: "ScrollButton",

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.move-top-btn {
  width: 40px;
  height: 40px;
  background: white;
  color: darkslateblue;
  border: none;
  border-radius: 100%;
  cursor: pointer;
}

.move-top-btn:hover {
  opacity: 90%;
}
</style>
