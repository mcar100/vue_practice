import { MEMO_MAXLENGTH } from "@/utils/constants";

export function addMemoData(list, data) {
  if (list.length === MEMO_MAXLENGTH) {
    throw new Error("메모가 꽉찼습니다.");
  } else {
    list.push(data);
  }
}

export function createMemo(memoList, data) {
  try {
    addMemoData(memoList, data);
    console.log(memoList);
  } catch (error) {
    console.log(error.message);
  }
}

export function removeMemo() {}

export function moveMemo() {}
