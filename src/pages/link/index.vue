<template>
  <div class="link">
    <link-swiper />
    <link-show />
    <link-sale />
    <link-join />
  </div>
</template>

<script>
import LinkSwiper from "../../component/link/LinkSwiper"
import LinkShow from "../../component/link/LinkShow"
import LinkSale from "../../component/link/LinkSale"
import LinkJoin from "../../component/link/LinkJoin"
export default {
  components: {
    LinkSwiper,
    LinkShow,
    LinkSale,
    LinkJoin,
  }
}
</script>

<style scoped>

</style>