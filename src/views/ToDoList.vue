<template>
  <div class="line-container">
    <div class="nail"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="board-container">
    <MemoPositionLayout
      :state="state"
      @add-memo="addMemo"
      @finish-moving-memo="finishMovingMemo"
    />
    <div class="memo-container">
      <div class="memo-error-container" v-if="errorState.isError">
        {{ errorState.errorMsg }}
      </div>
      <MemoList
        :memoList="memoList"
        @remove-memo="removeMemo"
        @clear-memo="clearMemo"
        @start-moving-memo="startMovingMemo"
        @throw-error="throwError"
      />
    </div>
  </div>
  <InputContainer :mode="state.currentMode" @create-memo="createMemo" />
</template>
<script>
import MemoList from "@/components/todolist/MemoList";
import InputContainer from "@/components/todolist/Input";
import MemoPositionLayout from "@/components/todolist/MemoPositionLayout";
import {
  MEMO_MAXLENGTH,
  MODE_CREATING,
  MODE_MOVING,
  MODE_NORMAL,
} from "@/utils/constants";
import {
  addMemoData,
  removeMemoData,
  checkAndChangeMemoClear,
} from "@/utils/memo";
import { setMemoPosition } from "@/utils/position";
import { checkMode, checkAndChangeMode } from "@/utils/mode";
import { errorHandler } from "@/utils/error";

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
      errorState: {
        isError: false,
        errorMsg: "",
      },
    };
  },
  methods: {
    createMemo(memoData) {
      try {
        if (this.memoList.length === MEMO_MAXLENGTH) {
          throw new Error("메모가 이미 꽉 찼습니다.");
        }

        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          checkAndChangeMode(this.state, MODE_CREATING);
          this.memoDataTemp = memoData;
        }
      } catch (error) {
        errorHandler(this.errorState, error);
      }
    },
    addMemo(positionIndex) {
      try {
        if (checkMode(this.state.currentMode, MODE_CREATING)) {
          setMemoPosition(this.state, positionIndex);
          addMemoData(this.memoList, this.memoDataTemp, positionIndex);
          this.memoDataTemp = {};
          checkAndChangeMode(this.state, MODE_NORMAL);
        }
      } catch (error) {
        errorHandler(this.errorState, error);
      }
    },
    removeMemo(memoIdx) {
      try {
        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          removeMemoData(this.state, this.memoList, memoIdx);
        }
      } catch (error) {
        errorHandler(this.errorState, error);
      }
    },
    clearMemo(memoIdx) {
      try {
        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          checkAndChangeMemoClear(this.memoList, memoIdx);
        }
      } catch (error) {
        errorHandler(this.errorState, error);
      }
    },
    startMovingMemo(movingMemoData) {
      try {
        if (checkMode(this.state.currentMode, MODE_NORMAL)) {
          this.memoDataTemp = movingMemoData;
          checkAndChangeMode(this.state, MODE_MOVING);
        }
      } catch (error) {
        errorHandler(this.errorState, error);
      }
    },
    finishMovingMemo(positionIndex) {
      try {
        if (checkMode(this.state.currentMode, MODE_MOVING)) {
          removeMemoData(this.state, this.memoList, this.memoDataTemp.position);
          setMemoPosition(this.state, positionIndex);
          addMemoData(this.memoList, this.memoDataTemp, positionIndex);
          this.memoDataTemp = {};
          checkAndChangeMode(this.state, MODE_NORMAL);
        }
      } catch (error) {
        errorHandler(this.errorState, error);
      }
    },
    throwError(error) {
      errorHandler(this.errorState, error);
    },
  },
};
</script>
<style lang="scss"></style>
