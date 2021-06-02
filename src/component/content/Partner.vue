<template>
  <div class="partner">
    <ce-title>
      <template v-slot:cn>战略合作伙伴</template>
      <template v-slot:en>STRATEGIC PARTNERS</template>
    </ce-title>
    <ul class="list">
      <li><img src="~assets/image/link/partner1.png" alt=""></li>
      <li><img src="~assets/image/link/partner2.png" alt=""></li>
      <li><img src="~assets/image/link/partner3.png" alt=""></li>
      <li><img src="~assets/image/link/partner4.png" alt=""></li>
      <li><img src="~assets/image/link/partner5.png" alt=""></li>
      <li><img src="~assets/image/link/partner1.png" alt=""></li>
      <li><img src="~assets/image/link/partner2.png" alt=""></li>
      <li><img src="~assets/image/link/partner3.png" alt=""></li>
      <li><img src="~assets/image/link/partner4.png" alt=""></li>
      <li><img src="~assets/image/link/partner5.png" alt=""></li>
    </ul>
    <div class="arrow">
      <img src="~assets/image/images/arrow.png" alt="" />
    </div>
  </div>
</template>

<script>
import CeTitle from "./CeTitle"
export default {
  name: "Partner",
  components: { CeTitle }
};
</script>

<style scoped>
.partner {
  margin-top: 20px;
  overflow: hidden;
  /* border: 1px solid red; */
}
.list {
  display: flex;
  /* flex-wrap: wrap; */
  width: 22rem;
  margin: 0 auto;
  animation: 10s rollup linear infinite normal;
}
.list>li img {
  width: 2.2rem;
  padding-bottom: 5%;
}
.arrow {
  text-align: center;
}

@keyframes rollup {
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-11rem);
  }
}
</style>