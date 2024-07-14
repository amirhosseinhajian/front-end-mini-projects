<template lang="html">
  <div class="analog-clock">
    <span
      class="analog-clock__hour"
      :style="{ transform: 'rotate(' + hour * 30 + 'deg)' }"
    ></span>
    <span
      class="analog-clock__minute"
      :style="{ transform: 'rotate(' + minute * 6 + 'deg)' }"
    ></span>
    <span
      class="analog-clock__second"
      :style="{ transform: 'rotate(' + second * 6 + 'deg)' }"
    ></span>
    <span class="analog-clock__dot"></span>
  </div>
</template>
<script setup>
defineProps({
  hour: {
    type: Number,
  },
  minute: {
    type: Number,
  },
  second: {
    type: Number,
  },
});
</script>
<style scoped lang="scss">
.analog-clock {
  border-radius: 100%;
  background: #ededed;
  border: 3px solid white;
  box-shadow: 2px 3px 8px 0 rgba(42, 42, 42, 0.236);
  margin: 50px auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 100%;
}
.analog-clock__minute,
.analog-clock__hour {
  position: absolute;
  height: 30px;
  width: 2px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 30px;
  right: 0;
  background: black;
  transform-origin: bottom center;
  z-index: 1;
  transition: transform 0.5s;
}
.analog-clock__minute {
  position: absolute;
  height: 45px;
  width: 2px;
  top: 0;
  left: 0;
  bottom: 44px;
}
.analog-clock__second {
  position: absolute;
  height: 53px;
  width: 2px;
  margin: 0 auto;
  top: 22px;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 4px;
  background: #bd0d00;
  transform-origin: bottom center;
  z-index: 1;
  transition: transform 0.5s;
}
.analog-clock__dot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 3px;
  height: 3px;
  border-radius: 100px;
  background: #eaeaea;
  border: 1px solid #b30c00;
  border-radius: 100px;
  margin: auto;
  z-index: 1;
}
</style>
