<template>
  <div
    v-if="isDragging"
    id="memo-moving-container"
    ref="movingElement"
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
  <transition-group class="memo-list" name="memo-move" tag="div">
    <div
      class="memo"
      v-for="memo in memoList"
      :key="memo.position"
      :class="['grid-pos' + memo.position, memo.style]"
    >
      <div class="memo-head">
        <div class="memo-pin" @click="pinClickHandler(memo.position)"></div>
        <span class="memo-move" @click="moveClickHandler($event, memo.position)"
          >이동</span
        >
      </div>
      <div class="memo-body">
        <span class="memo-date">{{ `due: ${memo.date}` }}</span>
        <textarea
          readonly
          :value="memo.contents"
          @click="textareaClickHandler(memo.position)"
          :class="{ 'memo--clear': memo.clear }"
        ></textarea>
      </div>
    </div>
  </transition-group>
</template>
<script>
import { findArrayIndex } from "@/utils/position";
export default {
  name: "MemoList",
  props: {
    memoList: Array,
  },
  emits: [
    "remove-memo",
    "clear-memo",
    "start-moving-memo",
    "cancel-moving-memo",
  ],
  data() {
    return {
      movingMemoData: null,
      isDragging: false,
      movingMemoposition: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
    };
  },
  methods: {
    pinClickHandler(memoPosition) {
      if (memoPosition !== undefined) {
        this.$emit("remove-memo", memoPosition);
      }
    },
    textareaClickHandler(memoPosition) {
      if (memoPosition !== undefined) {
        this.$emit("clear-memo", memoPosition);
      }
    },
    moveClickHandler(event, memoPosition) {
      if (memoPosition !== undefined) {
        this.isDragging = true;
        this.startDrag(event);
        const movingMemoIndex = findArrayIndex(this.memoList, memoPosition);
        this.movingMemoData = this.memoList[movingMemoIndex];
        this.$emit("start-moving-memo", this.movingMemoData);
      }
    },
    startDrag(e) {
      const memoDom = document.querySelector(".board-container");
      this.offset.x = memoDom.getBoundingClientRect().left + 30;
      this.offset.y = memoDom.getBoundingClientRect().top + 30;
      this.movingMemoposition.x = e.clientX - this.offset.x;
      this.movingMemoposition.y = e.clientY - this.offset.y;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(e) {
      if (this.isDragging) {
        this.movingMemoposition.x = e.clientX - this.offset.x;
        this.movingMemoposition.y = e.clientY - this.offset.y;
      }
    },
    onMouseUp() {
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
      this.movingMemoposition.x = 0;
      this.movingMemoposition.y = 0;
      this.isDragging = false;
      // this.$emit("cancel-moving-memo");
    },
  },
};
</script>
<style lang="scss"></style>
