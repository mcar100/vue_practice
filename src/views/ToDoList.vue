<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
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
import { MODE_NORMAL } from "@/utils/constants";
import {
  addMemoData,
  removeMemoData,
  checkAndChangeMemoClear,
  setMemoPosition,
} from "@/utils/memo";
// import { checkAndChangeMode } from "@/utils/mode";
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
