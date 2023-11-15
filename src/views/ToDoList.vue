<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <MemoPositionLayout :state="state" />
    <div class="memo-container">
      <MemoList
        :memoList="memoList"
        @remove-memo="removeMemo"
        @clear-memo="clearMemo"
      />
    </div>
  </div>
  <InputContainer @add-memo="addMemo" />
</template>
<script>
import MemoList from "@/components/todolist/MemoList";
import InputContainer from "@/components/todolist/Input";
import MemoPositionLayout from "@/components/todolist/MemoPositionLayout";
import { MODE_CREATING, MODE_NORMAL } from "@/utils/constants";
import {
  addMemoData,
  removeMemoData,
  checkAndChangeMemoClear,
  setMemoPosition,
} from "@/utils/memo";
import { checkAndChangeMode } from "@/utils/mode";

export default {
  name: "ToDoListPage",
  components: {
    MemoList,
    InputContainer,
    MemoPositionLayout,
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
    addMemo(memoData) {
      try {
        checkAndChangeMode(this.state, MODE_CREATING);
        const position = setMemoPosition(this.state);
        addMemoData(this.memoList, memoData, position);
        // checkAndChangeMode(this.state, MODE_NORMAL);
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
    clearMemo(memoIdx) {
      try {
        checkAndChangeMemoClear(this.memoList, memoIdx);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
