import { MEMO_MAXLENGTH } from "@/utils/constants";

export function addMemoData(memoList, data) {
  if (memoList.length === MEMO_MAXLENGTH) {
    throw new Error("메모가 꽉찼습니다.");
  } else {
    memoList.push(data);
  }
}

export function createMemoData(input, date) {
  const memoData = {
    contents: input,
    date: date,
    style: "",
  };
  return memoData;
}

export function removeMemo() {}

export function moveMemo() {}
