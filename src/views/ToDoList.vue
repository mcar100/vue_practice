<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <div class="memo-container">
      <MemoItem />
    </div>
  </div>
  <div class="input-container">
    <input
      type="text"
      maxlength="30"
      placeholder="해야 할 일을 입력해주세요 (30자 이내)"
    />
    <button type="submit">등록</button>
  </div>
</template>
<script>
import MemoItem from "@/components/layout/contents/Memo.vue";
export default {
  name: "ToDoListPage",
  components: {
    MemoItem,
  },
};
</script>
<style lang="scss"></style>
