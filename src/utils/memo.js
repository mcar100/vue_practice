import { MEMO_MAXLENGTH } from "@/utils/constants";
import { findArrayIndex } from "./position";

export function addMemoData(memoList, data, position) {
  if (memoList.length === MEMO_MAXLENGTH) {
    throw new Error("메모가 꽉찼습니다.");
  } else {
    data.position = position;
    memoList.push(data);
  }
}

export function createMemoData(input, date) {
  // memo-style
  const randNum = Math.floor(Math.random() * 6) + 1;
  const style = `memo-type${randNum}`;
  // memoData
  const memoData = {
    position: 0,
    contents: input,
    date: date,
    style: style,
    clear: false,
  };
  return memoData;
}

export function removeMemoData(state, memoList, memoIdx) {
  if (state.memoPositionList[memoIdx] === 0) {
    throw new Error("이미 비어있는 위치입니다.");
  } else {
    // clear memoPositionList
    state.memoPositionList[memoIdx] = 0;

    const memoListIndex = findArrayIndex(memoList, memoIdx);
    memoList.splice(memoListIndex, 1);
  }
}

export function checkAndChangeMemoClear(memoList, memoIdx) {
  const memoListIndex = findArrayIndex(memoList, memoIdx);

  if (memoList[memoListIndex].clear) {
    memoList[memoListIndex].clear = false;
  } else {
    memoList[memoListIndex].clear = true;
  }
}

export function moveMemoData() {}
