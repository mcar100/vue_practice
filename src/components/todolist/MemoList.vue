<template>
  <div
    class="memo"
    v-for="memo in memoList"
    :key="memo.position"
    :class="['grid-pos' + memo.position, memo.style]"
  >
    <div class="memo-head">
      <div class="memo-pin" @click="pinClickHandler(memo.position)"></div>
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
</template>
<script>
export default {
  name: "MemoList",
  props: {
    memoList: Array,
  },
  emits: ["remove-memo", "clear-memo"],
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
  },
};
</script>
<style lang="scss"></style>
