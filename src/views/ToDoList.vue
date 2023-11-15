<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <MemoPositionLayout :state="state" @add-memo="addMemo" />
    <div class="memo-container">
      <MemoList
        :memoList="memoList"
        @remove-memo="removeMemo"
        @clear-memo="clearMemo"
      />
    </div>
  </div>
  <InputContainer :mode="state.currentMode" @create-memo="createMemo" />
</template>
<script>
import MemoList from "@/components/todolist/MemoList";
import InputContainer from "@/components/todolist/Input";
import MemoPositionLayout from "@/components/todolist/MemoPositionLayout";
import { MEMO_MAXLENGTH, MODE_CREATING, MODE_NORMAL } from "@/utils/constants";
import {
  addMemoData,
  removeMemoData,
  checkAndChangeMemoClear,
} from "@/utils/memo";
import { setMemoPosition } from "@/utils/position";
import { checkMode, checkAndChangeMode } from "@/utils/mode";

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
      memoDataTemp: {},
    };
  },
  methods: {
    createMemo(memoData) {
      try {
        if (this.memoList.length === MEMO_MAXLENGTH) {
          throw new Error("메모가 꽉찼습니다.");
        }

        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          checkAndChangeMode(this.state, MODE_CREATING);
          this.memoDataTemp = memoData;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    addMemo(positionIndex) {
      try {
        if (checkMode(this.state.currentMode, MODE_CREATING)) {
          setMemoPosition(this.state, positionIndex);
          addMemoData(this.memoList, this.memoDataTemp, positionIndex);
          checkAndChangeMode(this.state, MODE_NORMAL);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    removeMemo(memoIdx) {
      try {
        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          removeMemoData(this.state, this.memoList, memoIdx);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    clearMemo(memoIdx) {
      try {
        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          checkAndChangeMemoClear(this.memoList, memoIdx);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
