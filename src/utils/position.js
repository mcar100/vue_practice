export function setMemoPosition(state, positionIndex) {
  if (state.memoPositionList[positionIndex]) {
    throw new Error("해당 위치에 이미 메모가 있습니다.");
  }
  state.memoPositionList[positionIndex] = 1;
}

export function findArrayIndex(array, index) {
  let arrayIndex = 0;
  if (array[0].position !== undefined) {
    arrayIndex = array.findIndex((element) => element.position === index);
  } else {
    arrayIndex = array.findIndex((element) => element === index);
  }
  if (arrayIndex === -1) {
    throw new Error("위치를 찾을 수가 없습니다.");
  }
  return arrayIndex;
}
