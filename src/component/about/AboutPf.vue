<template>
  <div class="aboutpf">
    <ce-title>
      <template v-slot:cn>全面架构涂料产业智联互通</template>
      <template v-slot:en
        >CREATE THE INTRECONNECTION OF COATING INDUSTRY</template
      >
    </ce-title>
    <p class="desc">
      金色摇篮通过实现企业、平台、产品的全面互联，构建了一个全要素、全产业链、全价值链、新型生产制造的产业服务体系，有效助力涂料企业优化技术方案、提高生产效率、全面降低成本、开拓全新市场。
    </p>
    <ul class="pfList">
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
      <li>
        <p class="t">涂料技术研发平台</p>
        <p class="b">重磅金技</p>
      </li>
    </ul>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CeTitle from "../../component/content/CeTitle.vue";
export default {
  name: "AboutPf",
  props: {},
  components: { CeTitle },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
p {
  font-size: 12px;
}
.desc {
  margin: 5%;
  color: #79797B;
}
.pfList {
  margin: 3%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pfList li {
  width: 48%;
  background-color: #f8f9fb;
  padding: 3% 8%;
  margin-bottom: 3%;
}
.pfList li .t {
  position: relative;
  color: #79797B;
}
.pfList li .t::before {
  content: "";
  width: 5px;
  height: 5px;
  position: absolute;
  top: 40%;
  left: -8%;
  background: #D8A857;
}
</style>
