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
  <InputContainer :createMemo="createMemo" />
</template>
<script>
import MemoItem from "@/components/todolist/Memo";
import InputContainer from "@/components/todolist/Input";
import { MODE_NORMAL, MODE_CREATING, MODE_MOVING } from "@/utils/constants";
import { addMemoData } from "@/utils/memo";
export default {
  name: "ToDoListPage",
  components: {
    MemoItem,
    InputContainer,
  },
  data() {
    return {
      memoList: [],
      mode0: MODE_NORMAL,
      mode1: MODE_CREATING,
      mode2: MODE_MOVING,
    };
  },
  methods: {
    createMemo(data) {
      try {
        addMemoData(this.memoList, data);
        console.log(this.memoList);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
