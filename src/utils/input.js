export function checkInputData(input, date) {
  if (input === "") {
    throw new Error("일정을 입력해주세요.");
  } else if (date === "") {
    throw new Error("날짜를 입력해주세요.");
  }
}
