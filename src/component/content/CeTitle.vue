<template>
  <div class="cetitle">
    <p class="cn"><slot name="cn">111</slot></p>
    <p class="en"><slot name="en">222</slot></p>
  </div>
</template>

<script>
export default {
  name: "CeTitle",
}
</script>

<style scoped>
.cetitle {
  margin: 20px auto;
  width: 90%;
  font-size: 18px;
  text-align: center;
}
.cetitle .en {
  font-size: 12px;
  color: #797979;
}
</style>