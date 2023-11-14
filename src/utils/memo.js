import { MEMO_MAXLENGTH } from "@/utils/constants";

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

    // find memoList index and remove
    const memoListIndex = memoList.findIndex(
      (memo) => memo.position === memoIdx
    );
    memoList.splice(memoListIndex, 1);
  }
}

export function checkMemoClear(memoList, memoIdx) {
  console.log(memoList[memoIdx]);
  if (memoList[memoIdx].clear) {
    memoList[memoIdx].clear = false;
  } else {
    memoList[memoIdx].clear = true;
  }
}

export function moveMemoData() {}

export function setMemoPosition(state) {
  const index = state.memoPositionList.findIndex((pos) => pos === 0);
  if (index === -1) {
    throw new Error("배치할 수 있는 위치가 없습니다.");
  }
  state.memoPositionList[index] = 1;
  return index;
}