<template>
  <div class="sebar" :style="setBgc">
    <div class="left">
      <div
        v-for="(cate, index) in cates"
        :key="index"
        @click="turnGold(index)"
        :class="{ gold: index == currentIndex }"
      >
        {{ cate }}
      </div>
    </div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "SeBar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    cates: {
      type: Array,
      default() {
        return [];
      },
    },
    bgc: {
      type: String,
      default: "#fff",
    },
  },
  computed: {
    setBgc() {
      return { backgroundColor: this.bgc };
    },
  },
  methods: {
    turnGold(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.sebar {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #e8e8eb;
  margin: 1% 0;
}
.sebar .left {
  flex: 1;
  display: flex;
  color: #79797b;
  font-weight: bold;
  /* background-color: #aaa; */
}
.sebar .left div {
  width: 18%;
  text-align: center;
}
.sebar .right {
  width: 10%;
  padding-right: 15%;
}
.gold {
  color: #d8a857;
  border-bottom: 1px solid #d8a857;
}
</style>
