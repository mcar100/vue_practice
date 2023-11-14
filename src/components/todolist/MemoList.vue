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
  mounted() {
    console.log("MemoItem props:", this.memoList);
  },
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
