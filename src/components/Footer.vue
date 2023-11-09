<template>
  <footer class="container">
    <ScrollButton />
  </footer>
</template>
<script>
import ScrollButton from "./buttons/ScrollButton.vue";
export default {
  name: "FooterNav",

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  components: {
    ScrollButton,
  },
};
</script>
<style lang="scss"></style>
