<template>
  <div class="abplan">
    <ce-title>
      <template v-slot:cn>全面助力行业升级-平台三大计划</template>
      <template v-slot:en
        >THREE PLANS OF PLATFORM FOR INDUSTRY UPGRADING</template
      >
    </ce-title>
    <ul class="category">
      <li>
        <div>
          百亿成长计划
        </div>
      </li>
      <li>
        <div>涂料千百十人才<br />蓝海计划</div>
      </li>
      <li>
        <div>涂料贸易商<br />服务商转型计划</div>
      </li>
    </ul>
    <div class="detail">
      <div class="h">
        <div class="text">百万成长计划<br />TEN BILLOW GROWTH PLAN</div>
        <div class="join">立即加入</div>
      </div>
      <ul class="b">
        <li>
          金色摇篮在地坪涂料、建筑涂料、钢结构防腐涂料三大领域分别打造百万级俱乐部，每个俱乐部由覆盖该产业上下游的企业组成。
        </li>
        <li>
          平台将为计划成员优化技术、采购、生产、销售等环节，为成员直增大于6.8%的利润价值，并利用平台智能系统，吸纳市场资源，扩大销售通路。
        </li>
        <li>
          平台将分发业务订单，与成员共同利用行业资源，击穿产品成本底线，形成市场竞争的绝对优势。
        </li>
        <li>
          同时通过利益绑定，形成一个具备更高价值的团体，或者战略收益，并极大抵抗各类经营风险。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CeTitle from "../content/CeTitle.vue";
export default {
  name: "AboutPlan",
  components: {
    CeTitle,
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.category {
  display: flex;
  font-size: 2vw;
  color: #fff;
  background-color: #0b294d;
  margin-bottom: 1%;
}
.category li {
  flex: 1;
  padding: 4% 3%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail {
  color: #fff;
  background-image: url("~assets/image/about/p4.jpg");
  background-size: contain;
}
.detail .h {
  padding-left: 7%;
  padding-bottom: 4%;
}
.detail .text {
  font-size: 5vw;
  padding: 5% 0;
}
.detail .join {
  font-size: 4vw;
  font-weight: bold;
  width: 30%;
  text-align: center;
  line-height: 250%;
  background-color: #dba857;
}
.detail .b {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-size: 12px;
  padding-bottom: 5%;
}
.detail .b li {
  width: 45%;
  padding: 3% 1%;
  margin-bottom: 1%;
  background-color: rgba(37, 37, 214, 0.3);
}
</style>
