<template>
  <Header />

  <router-view></router-view>

  <Footer />
</template>

<script>
import Header from "./components/layout/HeaderNav.vue";
import Footer from "./components/Footer.vue";

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

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
