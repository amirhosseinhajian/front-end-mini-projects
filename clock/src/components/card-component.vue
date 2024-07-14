<template lang="html">
  <div class="card">
    <div class="card__header">
      <AnalogClockComponent
        :hour="hour"
        :minute="minute"
        :second="second"
      ></AnalogClockComponent>
    </div>

    <div class="card__title">
      <DigitalClockComponent
        @changeHour="changeHour"
        @changeMinute="changeMinute"
        @changeSecond="changeSecond"
      ></DigitalClockComponent>
    </div>

    <div class="card__descryption">
      <p>Select a section from digital clock</p>
      <p>then change value from analog clock</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AnalogClockComponent from "./analog-clock-component.vue";
import DigitalClockComponent from "./digital-clock-component.vue";

let hour = ref(4);
let minute = ref(8);
let second = ref(51);

function changeHour(value) {
  hour.value = value;
}

function changeMinute(value) {
  minute.value = value;
}

function changeSecond(value) {
  second.value = value;
}
</script>
<style scoped lang="scss">
@font-face {
  font-family: notoSans-thin;
  src: url(./../assets/fonts/NotoSans-Regular.ttf);
}
.card {
  margin: 0 auto;
  width: 230px;
  height: 460px;
  border-radius: 17px;
  background-color: #eaeaea;
  box-shadow: inset 10px 0 10px rgba(255, 255, 255, 0.814),
    inset -10px 0 10px rgba(190, 190, 190, 0.611),
    0 5px 5px rgba(153, 145, 145, 0.156);

  &__header {
    padding: 40px 40px 0;
  }

  &__title {
    width: 65%;
    margin: 0 auto;
    text-align: center;
    padding: 20px 10px;

    h1 {
      letter-spacing: 0.2rem;
      position: relative;
    }

    h1::after {
      content: "";
      background-color: rgb(82, 99, 225);
      width: 33px;
      height: 2px;
      position: absolute;
      top: 33px;
      left: 8px;
    }
  }

  &__descryption {
    font-family: notoSans-thin;
    width: 75%;
    margin: 0 auto;
    font-size: 0.6rem;
    text-align: center;
    color: rgba(130, 130, 130, 0.958);
  }
}
</style>
