<template>
  <div class="mtcoact">
    <ce-title>
      <template v-slot:cn>如何合作</template>
      <template v-slot:en>HOW TO COOPERATE</template>
    </ce-title>
    <div class="ctlist">
      <div>
        <div class="icon">
          <img src="~assets/image/material/m11.png" alt="" />
        </div>
        <div class="t">
          原料贸易商<br />加入平台，查看大量优势原料清单，提出需求
        </div>
        <div class="m">
          同时平台分发订单及原有客户渠道双相结合<br />最大程度增加市场获利的机会<br />深度合作后，可进行平台并表，获得长期收益
        </div>
        <div class="b goldb">企业高效转型 | 增强盈利空间 | 创造全新优势</div>
      </div>
      <div>
        <div class="icon">
          <img src="~assets/image/material/m12.png" alt="" />
        </div>
        <div class="t">
          原材料厂商<br />加入平台，提供各类优势原料清单，录入平台
        </div>
        <div class="m">
          同时平台分发订单及原有客户渠道双相结合<br />最大程度增加市场获利的机会<br />深度合作后，可进行平台并表，获得长期收益
        </div>
        <div class="b blueb">物料快速销售 | 消化积存库压 | 开辟全新渠道</div>
      </div>
    </div>
  </div>
</template>

<script>
import CeTitle from "../content/CeTitle.vue";
export default {
  components: { CeTitle },
  name: "MtCoact",
};
</script>

<style scoped>
.mtcoact {
  font-size: 2vw;
}
.ctlist {
  width: 90%;
  margin: 0 auto;
}
.ctlist > div {
  margin: 3%;
  padding-left: 1%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.ctlist .icon img {
  width: 13vw;
}
.ctlist .t {
  font-size: 4vw;
  font-weight: bold;
}
.ctlist .m {
  color: #818181;
}
.ctlist .b {
  width: 80%;
  text-align: center;
  color: #fff;
}
.goldb {
  background-color: #d4aa58;
}
.blueb {
  background-color: #092b4d;
}
</style>