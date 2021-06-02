<template>
  <div class="material">
    <mt-cover />
    <mt-trait />
    <mt-edge />
    <mt-coact />
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import MtCover from "../../component/material/MtCover.vue"
import MtTrait from "../../component/material/MtTrait.vue"
import MtEdge from "../../component/material/MtEdge"
import MtCoact from "../../component/material/MtCoact"
export default {
  props: {},
  components: { MtCover, MtTrait, MtEdge, MtEdge, MtCoact },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
