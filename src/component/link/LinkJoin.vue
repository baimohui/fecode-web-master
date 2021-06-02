<template>
  <div class="linkjoin">
    <div class="goldchain">
      <div class="img"><img src="~assets/image/link/l8.jpg" alt="" /></div>
      <div class="text">
        <ce-title>
          <template v-slot:cn>供求金链</template>
          <template v-slot:en>GOLD CHAIN OF SUPPLY AND DEMAND</template>
        </ce-title>
        <div class="desc">
          供求金链作为金色摇篮八大子平台之一，集中全行业各链端实体型企业，打造生态型供应链，为您提供原材料集约化采购、并链服务，并第一时间发布爆款、新品，优化成本，开拓市场。
        </div>
      </div>
    </div>

    <div class="tojoin">
      <div class="former">
        <ce-title>
          <template v-slot:cn>成为合作伙伴</template>
          <template v-slot:en>BECOME THE PARTNERS</template>
        </ce-title>
        <div class="desc">
          基于金色摇篮-原材料供应链平台，建立企业专门服务体系，为供需两方打造战役平台的同时，也为以后供应链优化打下坚实基础，成本直降，开拓市场！
        </div>
      </div>
      <ul class="latter">
        <li v-for="(item, index) in 2" :key="index">
          <div class="l">
            <div class="t">涂料厂商</div>
            <div class="m">通过金色摇篮解决问题，实现最优供应链，成本直降</div>
            <div class="b">
              平台能力：匹配平台 | 优化平台 | 资源平台 | 服务监督平台
            </div>
          </div>
          <div class="r">
            <div class="t btn">立即加入</div>
            <div class="b btn">咨询客服</div>
          </div>
        </li>
      </ul>
      <ul class="ender">
        <li class="img"><img src="~assets/image/link/l7.jpg" alt="" /></li>
        <div class="t">
          <div class="title">原材料商销售、贸易商转型解决方案</div>
          <div class="text">
            实行原材料贸易商、原材料品牌商双向征集，以平台为中枢，重构渠道合作模式，实现原材料品牌商稳定、快速销货，同时消化库存，实现跨域销售服务；贸易商转型专业服务商，平台分发具有优势的可售产品清单，最大程度增加市场获利的机会。
          </div>
        </div>
        <div class="m">
          <div class="title">解决方案特点</div>
          <div class="text">
            快速销货，消化库存 | 高校转型，盈利渠道 | 集成分发，背书担保
          </div>
        </div>
        <div class="b">
          <div class="btn">立即加入</div>
          <div class="btn">咨询客服</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CeTitle from "../content/CeTitle.vue";
export default {
  name: "LinkJoin",
  components: { CeTitle },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.linkjoin {
  font-size: 4vw;
}
.linkjoin .goldchain {
  position: relative;
}
.linkjoin .goldchain .text {
  width: 80%;
  /* margin: 0 auto; */
  position: absolute;
  top: 3%;
  left: 10%;
  color: #fff;
}
.linkjoin .desc {
  font-size: 2vw;
  text-align: center;
  line-height: 150%;
}
.linkjoin .tojoin .former {
  width: 92%;
  margin: 6% auto;
}
.goldchain .img {
  text-align: center;
  background-color: #080a1f;
}
.latter,
.ender {
  width: 96%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.linkjoin .tojoin .latter li {
  height: 13vh;
  display: flex;
  justify-content: space-around;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2%;
}
.latter li .l {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.latter li .l .m {
  font-size: 2vw;
  width: 110%;
  transform: scale(0.9);
  position: relative;
  left: -5%;
}
.latter li .l .b {
  font-size: 2vw;
  width: 115%;
  transform: scale(0.8);
  position: relative;
  left: -11%;
  color: rgba(0, 0, 0, 0.8);
}
.latter li .r {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.btn {
  /* padding: 2% 6%; */
  width: 24vw;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
  font-size: 2vw;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.btn:hover {
  background-color: #d8a857;
  color: #fff;
}

.ender {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 90vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4% 3%;
}
.ender .img {
  text-align: center;
  background-color: #3084fe;
}
.ender .text {
  font-size: 2vw;
  width: 110%;
  transform: scale(0.9);
  position: relative;
  left: -5%;
}
.ender .title {
  font-weight: bold;
  line-height: 200%;
}
.ender .b {
  display: flex;
}
.ender .b div {
  margin-right: 2%;
}
</style>
