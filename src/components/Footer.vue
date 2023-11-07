<template>
  <div class="footer">
    <ScrollButton />
  </div>
</template>
<script>
import ScrollButton from "./layout/buttons/ScrollButton.vue";
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
<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  background: darkslateblue;
  color: white;
}

.footer p {
  margin-right: 5px;
}

.footer > button {
  margin-left: auto;
  margin-right: 15px;
}
</style>
