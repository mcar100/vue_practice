<template>
  <div class="position-bg-container" v-if="state.currentMode === createMode">
    <div
      class="position-memo-container"
      v-for="(n, idx) in memoMaxLength"
      :key="`pos-${n}`"
    >
      <button
        class="position-add-button"
        v-if="state.memoPositionList[idx] === 0"
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
  methods: {},
};
</script>
<style lang="scss"></style>
