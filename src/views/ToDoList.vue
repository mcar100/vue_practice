<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <div class="memo-container">
      <MemoItem v-for="(memo, idx) in memoList" :key="idx" :data="memo" />
    </div>
  </div>
  <InputContainer :memoList="memoList" />
</template>
<script>
import MemoItem from "@/components/todolist/Memo";
import InputContainer from "@/components/todolist/Input";
import { MODE_NORMAL, MODE_CREATING } from "@/utils/constants";
import { addMemoData } from "@/utils/memo";
import { checkAndChangeMode } from "@/utils/mode";
export default {
  name: "ToDoListPage",
  components: {
    MemoItem,
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
        console.log(this.state);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
