<template>
  <div class="input-container">
    <form>
      <div class="inactive" v-if="this.mode !== normalMode"></div>
      <input
        type="text"
        v-model="input"
        maxlength="30"
        :placeholder="inputPlaceholder"
        @input="handleInputChange"
      />
      <input
        type="date"
        class="calendar"
        v-model="date"
        :placeholder="this.customDate"
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
    errorState: Object,
  },
  data() {
    return {
      input: "",
      date: "",
      customDate: changeDateForm(new Date()),
      normalMode: MODE_NORMAL,
      inputPlaceholder: "일정을 입력해주세요 (30자 내)",
    };
  },
  methods: {
    handleInputChange(event) {
      this.input = event.target.value;
    },
    handleDateChange(event) {
      this.date = event.target.value;
      this.customDate = changeDateForm(this.date);
    },
    handleSubmit(event) {
      event.preventDefault();
      try {
        checkInputData(this.input, this.customDate);
        const memoData = createMemoData(this.input, this.customDate);
        this.clearInputData();
        this.$emit("create-memo", memoData);
        this.inputPlaceholder = "일정을 입력해주세요 (30자 내)";
      } catch (error) {
        this.inputPlaceholder = error.message;
      }
    },
    clearInputData() {
      this.input = "";
      this.date = "";
      this.customDate = changeDateForm(new Date());
    },
  },
};
</script>
<style lang="scss"></style>
