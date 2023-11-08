<template>
  <div class="black-bg">
    <div class="white-bg">
      <button @click="callCloseModal" class="close-btn">x</button>
      <h4>{{ modal.title }}</h4>
      <img :src="modal.image" class="modal-img" />
      <p>{{ modal.price }}</p>
      <p>{{ modal.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailModal",
  props: {
    modal: Object,
    closeModal: Function,
  },
  methods: {
    callCloseModal() {
      this.closeModal();
    },
  },
};
</script>
<style lang="scss"></style>
