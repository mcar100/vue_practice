<template>
  <MovingMemo
    :isDragging="isDragging"
    :movingMemoData="movingMemoData"
    :movingMemoEvent="movingMemoEvent"
    @isDragging-false="finishDragging"
  />
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
import MovingMemo from "./MovingMemo.vue";

export default {
  name: "MemoList",
  props: {
    memoList: Array,
  },
  emits: ["remove-memo", "clear-memo", "start-moving-memo", "throw-error"],
  data() {
    return {
      movingMemoData: null,
      isDragging: false,
      movingMemoEvent: null,
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
      try {
        if (this.memoList.length === 8) {
          throw new Error("이동할 곳이 없습니다.");
        }
        if (memoPosition !== undefined) {
          const movingMemoIndex = findArrayIndex(this.memoList, memoPosition);
          this.movingMemoData = this.memoList[movingMemoIndex];
          this.$emit("start-moving-memo", this.movingMemoData);
          this.movingMemoEvent = event;
          this.isDragging = true;
        }
      } catch (error) {
        this.$emit("throw-error", error);
      }
    },
    finishDragging() {
      if (this.isDragging) {
        this.isDragging = false;
      }
    },
  },
  components: { MovingMemo },
};
</script>
<style lang="scss"></style>
