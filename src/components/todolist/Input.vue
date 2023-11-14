<template>
  <div class="input-container">
    <form>
      <input
        type="text"
        v-model="input"
        maxlength="30"
        placeholder="일정의 내용과 날짜를 입력해주세요 (30자 이내)"
        @input="handleInputChange"
      />
      <input
        type="datetime-local"
        class="calendar"
        v-model="date"
        placeholder="날짜를 입력해주세요."
        @input="handleDateChange"
      />
      <button type="submit" @click="handleSubmit">등록</button>
    </form>
  </div>
</template>
<script>
import { setInputData } from "@/utils/input";

export default {
  name: "InputContainer",
  props: {
    createMemo: Function,
  },
  data() {
    return {
      input: "",
      date: "",
    };
  },
  methods: {
    handleInputChange(event) {
      this.input = event.target.value;
    },
    handleDateChange(event) {
      this.date = event.target.value;
    },
    handleSubmit(event) {
      event.preventDefault();
      const data = setInputData(this.input, this.date);
      this.createMemo(data);
    },
  },
};
</script>
<style lang="scss"></style>
