export function checkInputData(input, date) {
  if (input === "") {
    throw new Error("일정을 입력해주세요.");
  } else if (date === "") {
    throw new Error("날짜를 입력해주세요.");
  }
}

export function changeDateForm(date) {
  const oldForm = new Date(date);
  const yy = oldForm.getFullYear() % 100;
  const mm = String(oldForm.getMonth() + 1).padStart(2, "0");
  const dd = String(oldForm.getDate()).padStart(2, "0");

  return `${yy}.${mm}.${dd}`;
}
