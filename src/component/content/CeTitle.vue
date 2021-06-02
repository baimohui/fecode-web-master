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
  margin: 0 auto;
  margin-top: 0.9rem;
  margin-bottom: 0.4rem;
  width: 90%;
  font-size: 0.39rem;
  text-align: center;
}
.cetitle .en {
  font-size: 0.2rem;
  color: #797979;
}
</style>