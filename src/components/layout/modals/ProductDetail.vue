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

<!-- <style>
.black-bg {
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 30px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 40px;
}

.modal-img {
  width: 300px;
}

.close-btn {
  border: none;
  background: white;
  cursor: pointer;
}
</style> -->
