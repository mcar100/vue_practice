export function setInputData(input, date) {
  const memoData = {
    contents: input,
    date: date,
  };
  return memoData;
}

export function checkInputData(data) {
  if (data.contents === "") {
    throw new Error("일정을 입력해주세요.");
  } else if (data.date === "") {
    throw new Error("날짜를 입력해주세요.");
  }
}
