<template>
  <div
    class="memo"
    v-for="(memo, idx) in memoList"
    :key="idx"
    :class="memo.style"
  >
    <div class="memo-head">
      <div class="memo-pin"></div>
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
  mounted() {
    console.log("MemoItem props:", this.memoList);
  },
  methods: {},
  components: {},
};
</script>
<style lang="scss"></style>
