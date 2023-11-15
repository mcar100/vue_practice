<template>
  <div class="input-container">
    <form>
      <div class="inactive" v-if="this.mode !== normalMode"></div>
      <input
        type="text"
        v-model="input"
        maxlength="30"
        placeholder="일정의 내용을 입력해주세요 (30자 이내)"
        @input="handleInputChange"
      />
      <input
        type="date"
        class="calendar"
        v-model="date"
        placeholder="마감일을 입력해주세요."
        @input="handleDateChange"
      />
      <button type="submit" @click="handleSubmit">등록</button>
    </form>
  </div>
</template>
<script>
import { changeDateForm, checkInputData } from "@/utils/input";
import { createMemoData } from "@/utils/memo";
import { MODE_NORMAL } from "@/utils/constants";

export default {
  name: "InputContainer",
  props: {
    mode: Number,
  },
  data() {
    return {
      input: "",
      date: "",
      normalMode: MODE_NORMAL,
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
      try {
        checkInputData(this.input, this.date);
        const memoDate = changeDateForm(this.date);
        const memoData = createMemoData(this.input, memoDate);
        this.input = "";
        this.date = "";
        this.$emit("create-memo", memoData);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
<style lang="scss"></style>
