<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <div class="memo-container">
      <MemoList :memoList="memoList" />
    </div>
  </div>
  <InputContainer @add-to-memoList="addMemo" />
</template>
<script>
import MemoList from "@/components/todolist/MemoList";
import InputContainer from "@/components/todolist/Input";
import { MODE_NORMAL, MODE_CREATING } from "@/utils/constants";
import { addMemoData } from "@/utils/memo";
import { checkAndChangeMode } from "@/utils/mode";
export default {
  name: "ToDoListPage",
  components: {
    MemoList,
    InputContainer,
  },
  data() {
    return {
      state: {
        memoPosition: [],
        currentMode: MODE_NORMAL,
      },
      memoList: [],
    };
  },
  methods: {
    createMemo(data) {
      try {
        addMemoData(this.state, data);
        checkAndChangeMode(this.state, MODE_CREATING);
        console.log(this.memo);
      } catch (error) {
        console.log(error.message);
      }
    },
    addMemo(memoData) {
      addMemoData(this.memoList, memoData);
      console.log(this.memoList);
    },
  },
};
</script>
<style lang="scss"></style>
