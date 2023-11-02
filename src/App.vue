<template>
  <HeaderNav />

  <main id="main">
    <ProductList />
  </main>
</template>

<script>
import HeaderNav from "./components/layout/HeaderNav.vue";
import ProductList from "./views/Product.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HeaderNav,
    ProductList,
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
