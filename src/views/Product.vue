<template>
  <ProductDetailModal
    :modal="modal"
    :closeModal="closeModal"
    v-if="isModalOpen === true"
  />
  <div v-for="r in oneroom" :key="r.id">
    <img :src="r.image" class="room-img" />
    <h4 @click="openModal(r)">{{ r.title }}</h4>
    <p>{{ r.price.toLocaleString() }}원</p>
  </div>
</template>

<script>
import ProductDetailModal from "@/components/layout/modals/ProductDetail.vue";
import data from "../assets/room";

export default {
  name: "ProductPage",
  components: {
    ProductDetailModal,
  },
  data() {
    return {
      isModalOpen: false,
      modal: { title: "", image: "", price: 0, content: "" },
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
    closeModal() {
      this.isModalOpen = false;
      this.modal.title = "";
      this.modal.image = "";
      this.modal.price = "";
      this.modal.content = "";
    },
  },
};
</script>
<style lang="scss"></style>
