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
<style lang="scss"></style>
