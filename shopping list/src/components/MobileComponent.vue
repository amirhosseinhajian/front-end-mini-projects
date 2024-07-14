<template>
  <div id="mobile">
    <img id="notebook-img" src="@/assets/images/notebook.png" alt="" />
    <div class="top">
      <slot name="top"></slot>
    </div>
    <slot name="body"></slot>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#mobile {
  background-color: white;
  border: 5px solid #707070;
  border-radius: 40px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  width: 300px;
  min-height: 400px;
}

#mobile::before {
  content: "";
  background-color: #707070;
  width: 60%;
  height: 4%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 0 0 10px 10px;
}

#notebook-img {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 35%;
  height: 35%;
  z-index: 1;
}

.top {
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.bottom {
  padding: 20px;
}

.bottom::after {
  content: "";
  background-color: #707070;
  width: 40%;
  height: 3px;
  position: absolute;
  top: 98.5%;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, 0);
}
</style>
