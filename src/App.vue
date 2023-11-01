<template>
  <div class="black-bg" v-if="isModalOpen === true">
    <div class="white-bg">
      <button @click="isModalOpen = false" class="close-btn">x</button>
      <h4>{{ modal.title }}</h4>
      <img :src="modal.image" class="modal-img" />
      <p>{{ modal.price }}</p>
      <p>{{ modal.content }}</p>
    </div>
  </div>

  <div class="menu">
    <a v-for="n in navigator" :key="n">{{ n }}</a>
  </div>

  <div v-for="r in oneroom" :key="r.id">
    <img :src="r.image" class="room-img" />
    <h4 @click="openModal(r)">{{ r.title }}</h4>
    <p>{{ r.price.toLocaleString() }}원</p>
  </div>
</template>

<script>
import data from "./assets/room";
export default {
  name: "App",
  data() {
    return {
      isModalOpen: false,
      modal: { title: "", image: "", price: 0, content: "" },
      navigator: ["Home", "Shop", "About"],
      oneroom: data,
    };
  },
  methods: {
    openModal(data) {
      this.isModalOpen = true;
      this.modal.title = data.title;
      this.modal.image = data.image;
      this.modal.price = data.price;
      this.modal.content = data.content;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

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

.modal-img {
  width: 300px;
}

.close-btn {
  border: none;
  background: white;
  cursor: pointer;
}
</style>
