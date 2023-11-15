<template>
  <div class="position-bg-container" v-if="state.currentMode === createMode">
    <span class="position-span">배치할 곳을 선택해 주세요.</span>
    <div
      class="position-memo-container"
      v-for="(n, idx) in memoMaxLength"
      :key="`pos-${n}`"
    >
      <button
        class="position-add-button"
        v-if="state.memoPositionList[idx] === 0"
        @click="handlePositionClick(idx)"
      >
        +
      </button>
    </div>
  </div>
</template>
<script>
import { MEMO_MAXLENGTH, MODE_CREATING, MODE_MOVING } from "@/utils/constants";
export default {
  name: "MemoPositionLayout",
  props: {
    state: Object,
  },
  data() {
    return {
      memoMaxLength: MEMO_MAXLENGTH,
      createMode: MODE_CREATING,
      moveMode: MODE_MOVING,
    };
  },
  methods: {
    handlePositionClick(idx) {
      this.$emit("add-memo", idx);
    },
  },
};
</script>
<style lang="scss"></style>
