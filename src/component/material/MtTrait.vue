<template>
  <div class='mttrait'>
    <ce-title>
      <template v-slot:cn>解决方案流程示意及特点</template>
      <template v-slot:en>SOLUTION FLOW DIAGRAM AND CHARACTERISTICS</template>
    </ce-title>
    <div class="exemple"><img src="~assets/image/material/trait.png" alt=""></div>
    <ul class="mtlist">
      <li v-for="(item, index) in 4" :key="index">
        <div class="t">原材料厂商</div>
        <div class="b">快速销货，消化库存</div>
      </li>
    </ul>
  </div>
</template>

<script>
import CeTitle from "../content/CeTitle.vue"
export default {
  name: 'MtTrait',
  components: {
    CeTitle
  }
}
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.mttrait .exemple {
  text-align: center;
}
.mtlist {
  width: 86%;
  margin: 3% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #fff;
  font-size: 12px;
}
.mtlist li {
  padding: 6% 8%;
  margin-bottom: 1%;
  text-align: center;
  background-image: url("~assets/image/material/mtbgi.jpg");
  background-size: contain;
}
.mtlist li .t{
  font-size: 16px;
  color: #d4aa58;
}
</style>
