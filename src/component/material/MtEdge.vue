<template>
  <div class="mtedge">
    <ce-title>
      <template v-slot:cn>方案优势</template>
      <template v-slot:en>PROGRAMME ADVANTAGES</template>
    </ce-title>
    <div class="edlist">
      <div>
        <div class="title goldt">原 / 料 / 贸 / 易 / 商</div>
        <ul class="iconlist">
          <li>
            <div class="icon">
              <img src="~assets/image/material/m1.png" alt="" />
            </div>
            <div class="text">
              打破传统关系<br />重构渠道合作模式<br />转型为专业服务商
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m2.png" alt="" />
            </div>
            <div class="text">
              打破品种边界<br />获得多品类的稳定货源<br />快速满足客户不同需求
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m3.png" alt="" />
            </div>
            <div class="text">
              打破库存边界<br />避免呆滞物料和仓库管理<br />快速响应客户需求数量
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m4.png" alt="" />
            </div>
            <div class="text">
              打破利润边界<br />查看平台权限特惠产品<br />增加市场获利的机会
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m5.png" alt="" />
            </div>
            <div class="text">
              平台背书担保<br />避免坏账风险<br />上游风险<br />缓解资金压力
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div class="title bluet">原 / 材 / 料 / 厂 / 商</div>
        <ul class="iconlist">
          <li>
            <div class="icon">
              <img src="~assets/image/material/m6.png" alt="" />
            </div>
            <div class="text">
              打破传统关系<br />重构渠道合作模式<br />转型为专业服务商
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m7.png" alt="" />
            </div>
            <div class="text">
              打破品种边界<br />获得多品类的稳定货源<br />快速满足客户不同需求
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m8.png" alt="" />
            </div>
            <div class="text">
              打破库存边界<br />避免呆滞物料和仓库管理<br />快速响应客户需求数量
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m9.png" alt="" />
            </div>
            <div class="text">
              打破利润边界<br />查看平台权限特惠产品<br />增加市场获利的机会
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="~assets/image/material/m10.png" alt="" />
            </div>
            <div class="text">
              平台背书担保<br />避免坏账风险<br />上游风险<br />缓解资金压力
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CeTitle from "../content/CeTitle";
export default {
  name: "MtEdge",
  props: {},
  components: { CeTitle },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.mtedge {
  background-color: #eee;
  font-size: 3vw;
  padding: 3% 0;
}
.edlist {
  width: 90%;
  margin: 0 auto;
}
.edlist>div {
  padding: 3% 0;
  margin-bottom: 3%;
  background-color: #fff;
}
.edlist .title {
  width: 90%;
  height: 4vh;
  line-height: 4vh;
  margin: 3% auto;
  text-align: center;
  color: #fff;
  border-radius: 2vh;
}
.edlist .iconlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.edlist .iconlist li {
  text-align: center;
  width: 25vh;
  padding: 3% 5%;
}
.edlist .icon {
  text-align: center;
}
.edlist .icon img {
  width: 12vw;
}
.edlist .text {
  font-size: 2vw;
  color: #7f7f7f;
  font-weight: bold;
}
.goldt {
  background-color: #d4aa58;
}
.bluet {
  background-color: #092b4d;
}
</style>
