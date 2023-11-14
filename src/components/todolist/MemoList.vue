<template>
  <div
    class="memo"
    v-for="memo in memoList"
    :key="memo.position"
    :class="memo.style"
  >
    <div class="memo-head">
      <div class="memo-pin" @click="pinClickHandler(memo.position)"></div>
    </div>
    <div class="memo-body">
      <span class="memo-date">{{ `due: ${memo.date}` }}</span>
      <textarea readonly :value="memo.contents"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "MemoList",
  props: {
    memoList: Array,
  },
  emits: ["removeMemo"],
  methods: {
    pinClickHandler(itemPosition) {
      if (itemPosition !== undefined) {
        this.$emit("remove-memo", itemPosition);
      }
    },
  },
};
</script>
<style lang="scss"></style>
