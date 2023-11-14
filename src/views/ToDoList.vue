<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <div class="memo-container">
      <MemoList :memoList="memoList" @remove-memo="removeMemo" />
    </div>
  </div>
  <InputContainer @add-memo="addMemo" />
</template>
<script>
import MemoList from "@/components/todolist/MemoList";
import InputContainer from "@/components/todolist/Input";
import { MODE_NORMAL, MODE_CREATING } from "@/utils/constants";
import { addMemoData, removeMemoData, setMemoPosition } from "@/utils/memo";
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
        memoPositionList: new Array(8).fill(0),
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
      try {
        const position = setMemoPosition(this.state);
        addMemoData(this.memoList, memoData, position);
      } catch (error) {
        console.log(error.message);
      }
    },
    removeMemo(memoIdx) {
      try {
        removeMemoData(this.state, this.memoList, memoIdx);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
