<template>
  <div>
    <div
      :style="{
        'background-image': `url(${require('~/assets/image/placeholder.png')})`,
      }"
    ></div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "default.vue",
};
</script>

<style scoped></style>
