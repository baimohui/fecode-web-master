<template>
  <div class="mtcover">
    <icon-cover height="40" />
    <div class="text">
      <div class="t">原材料销售、贸易商转型解决方案</div>
      <div class="m">
        实行原材料贸易商、原材料品牌商双向征集，服务涂料厂商以平台为申请，重构渠道合作模式，实现三方受益
      </div>
      <div class="b">立即加入 ></div>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import IconCover from "../../component/content/IconCover.vue";
export default {
  name: "MtCover",
  props: {},
  components: { IconCover },
  data() {
    return {};
  },
};
</script>

<style scoped>
.mtcover {
  position: relative;
  font-size: 14px;
  color: #d4aa58;
}
.mtcover .text {
  position: absolute;
  top: 25%;
  left: 7%;
  width: 86%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.mtcover .text .m {
  font-size: 12px;
  color: #fff;
}
.mtcover .text .b {
  margin-top: 5%;
  padding: 2% 5%;
  width: 40%;
  border: 1px solid #786643;
}
</style>
