export function setInputData(input, date) {
  try {
    checkInputData(input, date);
    const memoData = {
      contents: input,
      date: date,
    };
    clearInput(input, date);
    return memoData;
  } catch (error) {
    console.log(error.message);
  }
}

function checkInputData(input, date) {
  if (input === "") {
    throw new Error("일정을 입력해주세요.");
  } else if (date === "") {
    throw new Error("날짜를 입력해주세요.");
  }
}

function clearInput(input, date) {
  if (input) {
    input = "";
  }
  if (date) {
    date = "";
  }
  return;
}
