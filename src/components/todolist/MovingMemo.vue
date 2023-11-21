<template>
  <div
    v-if="isDragging"
    id="memo-moving-container"
    :style="{
      left: `${movingMemoposition.x}px`,
      top: `${movingMemoposition.y}px`,
    }"
  >
    <div class="memo" :class="movingMemoData.style">
      <div class="memo-head">
        <div class="memo-pin"></div>
      </div>
      <div class="memo-body">
        <span class="memo-date">{{ `due: ${movingMemoData.date}` }}</span>
        <textarea
          readonly
          :value="movingMemoData.contents"
          :class="{ 'memo--clear': movingMemoData.clear }"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovingMemo",
  props: {
    isDragging: Boolean,
    movingMemoData: Object,
    movingMemoEvent: Object,
  },
  emits: ["isDragging-false"],
  data() {
    return {
      movingMemoposition: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
    };
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.startDrag(this.movingMemoEvent);
      }
    },
  },
  methods: {
    startDrag(e) {
      const memoDom = document.querySelector(".board-container");
      if (memoDom) {
        this.offset.x = memoDom.getBoundingClientRect().left + 30;
        this.offset.y = memoDom.getBoundingClientRect().top + 30;
      }
      this.movingMemoposition.x = e.clientX - this.offset.x;
      this.movingMemoposition.y = e.clientY - this.offset.y;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("click", this.onMouseClick);
    },
    onMouseMove(e) {
      if (this.isDragging) {
        this.movingMemoposition.x = e.clientX - this.offset.x;
        this.movingMemoposition.y = e.clientY - this.offset.y;
      }
    },
    onMouseClick(e) {
      if (e.target.classList.contains("position-add-button")) {
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("click", this.onMouseClick);
        this.movingMemoposition.x = 0;
        this.movingMemoposition.y = 0;
        this.$emit("isDragging-false");
      }
    },
  },
};
</script>
<style lang="scss"></style>
