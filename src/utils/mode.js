import { MODE_NORMAL, MODE_CREATING, MODE_MOVING } from "./constants";

export function checkMode(currentMode, mode) {
  if (currentMode === mode) {
    return true;
  } else {
    throw new Error("현재 상태에서는 수행할 수 없습니다.");
  }
}

export function checkAndChangeMode(state, mode) {
  if (mode === MODE_NORMAL) {
    changeToNormalMode(state);
  } else if (mode === MODE_CREATING) {
    changeToCreatingMode(state);
  } else if (mode === MODE_MOVING) {
    changeToMovingMode(state);
  } else {
    throw new Error("존재하지 않는 모드입니다.");
  }
}

function changeToCreatingMode(state) {
  if (state.currentMode !== MODE_CREATING) {
    state.currentMode = MODE_CREATING;
  } else {
    throw new Error("이미 메모를 생성 중입니다.");
  }
}

function changeToNormalMode(state) {
  if (state.currentMode !== MODE_NORMAL) {
    state.currentMode = MODE_NORMAL;
  } else {
    throw new Error("이미 작업이 완료된 상태입니다.");
  }
}

function changeToMovingMode(state) {
  if (state.currentMode !== MODE_MOVING) {
    state.currentMode = MODE_MOVING;
  } else {
    throw new Error("이미 메모를 이동 중에 있습니다.");
  }
}
