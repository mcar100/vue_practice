<template>
  <div class="body-container">
    <Header />

    <main class="container">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/HeaderNav";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
// scss 적용
</style>
