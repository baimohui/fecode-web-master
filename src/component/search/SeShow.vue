<template>
  <div class="seshow">
    <div class="top">
      <img src="~assets/image/search/searchbgi.jpg" alt="" />
    </div>
    <div class="bottom">
      <img src="~assets/image/search/se1.jpg" alt="" />
      <img src="~assets/image/search/se2.jpg" alt="" />
      <img src="~assets/image/search/se3.jpg" alt="" />
    </div>
    <div class="text">
      <p class="f">涂料代工，就找金色摇篮6.8%利润直增</p>
      <p class="s">全区域、全领域助企业达成跨域销售</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeShow",
};
</script>

<style scoped>
.seshow {
  position: relative;
  margin-top: 5%;
}
.seshow img {
  height: 100px;
}
.seshow .bottom {
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
}
.seshow .bottom img {
  width: 31%;
}
.seshow .text {
  position: absolute;
  top: 10%;
  left: 5%;
  color: #fff;
  line-height: 250%;
}
.seshow .text .f {
  font-size: 16px;
}
.seshow .text .s {
  color: rgba(255, 255, 255, 0.6);
}
</style>