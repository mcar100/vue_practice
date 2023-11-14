import { MEMO_MAXLENGTH } from "@/utils/constants";

export function addMemoData(memoList, data) {
  if (memoList.length === MEMO_MAXLENGTH) {
    throw new Error("메모가 꽉찼습니다.");
  } else {
    memoList.push(data);
  }
}

export function createMemoData(input, date) {
  // memo-style
  const randNum = Math.floor(Math.random() * 6) + 1;
  const style = `memo-type${randNum}`;
  // memoData
  const memoData = {
    contents: input,
    date: date,
    style: style,
  };
  return memoData;
}

export function removeMemo() {}

export function moveMemo() {}
