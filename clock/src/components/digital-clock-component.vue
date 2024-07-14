<template lang="html">
  <div class="digital-clock">
    <input
      type="text"
      class="digital-clock__hour"
      value="04"
      maxlength="2"
      @change="onHourChange($event.target.value)"
    />
    <span class="digital-clock__separator">:</span>
    <input
      type="text"
      class="digital-clock__minute"
      value="08"
      maxlength="2"
      @change="onMinuteChange($event.target.value)"
    />
    <span class="digital-clock__separator">:</span>
    <input
      type="text"
      class="digital-clock__second"
      value="51"
      maxlength="2"
      @change="onSecondChange($event.target.value)"
    />
  </div>
</template>
<script setup>
const emit = defineEmits(["changeHour", "changeMinute", "changeSecond"]);

function onHourChange(value) {
  emit("changeHour", Number(value));
}

function onMinuteChange(value) {
  emit("changeMinute", Number(value));
}

function onSecondChange(value) {
  emit("changeSecond", Number(value));
}
</script>
<style scoped lang="scss">
@font-face {
  font-family: notoSans-regular;
  src: url(./../assets/fonts/NotoSans-Regular.ttf);
}
.digital-clock {
  input {
    border-width: 0px;
    border: none;
    outline: none;
    font-family: notoSans-regular;
  }
  .digital-clock__separator {
    display: inline-block;
    vertical-align: middle;
    margin-top: -1rem;
    font-weight: bold;
  }

  .digital-clock__hour,
  .digital-clock__minute,
  .digital-clock__second {
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    font-size: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    user-select: none;
    caret-color: transparent;
    text-align: center;

    &:focus {
      border-bottom: 2px solid blue;
      height: 38px;
    }
  }
}
</style>
