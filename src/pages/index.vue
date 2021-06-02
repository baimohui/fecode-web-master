<template>
  <div class="ui-main">
    <div class="ui-content">
      <home-swiper />
      <plat-form />
      <navigator />
      <supply-zone />
      <home-news />
      <partner />
      <foot />
    </div>
  </div>
</template>

<script>
import HomeSwiper from "../component/home/HomeSwiper";
import Navigator from "../component/home/Navigator.vue";
import SupplyZone from "../component/home/SupplyZone";
import HomeNews from "../component/home/HomeNews";
import PlatForm from "../component/home/PlatForm"
import Partner from "../component/content/Partner";
import Foot from "../component/content/Foot";
export default {
  data() {
    return {};
  },
  components: {
    HomeSwiper,
    PlatForm,
    Navigator,
    SupplyZone,
    Partner,
    HomeNews,
    Foot,
  },

  async asyncData({ $http }) {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
