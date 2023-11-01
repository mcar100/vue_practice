<template>
  <div class="menu">
    <a v-for="n in navigator" :key="n">{{ n }}</a>
  </div>

  <!-- <div v-for="(product, idx) in products" :key="idx">
    <h4>{{ product.name }}</h4>
    <p>{{ product.price }} 만원</p>
    <button v-on:click="increase(idx)">허위매물신고</button>
    <span> 신고수: {{ product.count }}</span>
  </div> -->
  <div>
    <img src="./assets/room0.jpg" class="room-img" />
    <h4>{{ products[0].name }}</h4>
    <h4>{{ products[0].price }}</h4>
    <button v-on:click="products[0].count++">허위매물신고</button>
    <span>신고수: {{ products[0].count }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4>{{ products[1].name }}</h4>
    <h4>{{ products[1].price }}</h4>
    <button v-on:click="products[1].count++">허위매물신고</button>
    <span> 신고수: {{ products[1].count }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4>{{ products[2].name }}</h4>
    <h4>{{ products[2].price }}</h4>
    <button v-on:click="products[2].count++">허위매물신고</button>
    <span> 신고수: {{ products[2].count }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // count: 0,
      navigator: ["Home", "Shop", "About"],
      products: [
        { name: "역삼동원룸", price: 60, count: 0, url: "./assets/room0.jpg" },
        { name: "천호동원룸", price: 70, count: 0, url: "./assets/room1.jpg" },
        { name: "마포구원룸", price: 50, count: 0, url: "./assets/room2.jpg" },
      ],
    };
  },
  methods: {
    increase(idx) {
      this.products[idx].count++;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 20px;
}
</style>
