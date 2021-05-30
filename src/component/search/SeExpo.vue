<template>
  <div class="sewin">
    <div class="seshow">
      <div class="top">
        <img src="~assets/image/search/searchbgi.jpg" alt="" />
      </div>
      <div class="bottom">
        <img src="~assets/image/search/se1.jpg" alt="" />
        <img src="~assets/image/search/se2.jpg" alt="" />
        <img src="~assets/image/search/se3.jpg" alt="" />
      </div>
      <div class="text">
        <p class="f">涂料代工，就找金色摇篮6.8%利润直增</p>
        <p class="s">全区域、全领域助企业达成跨域销售</p>
      </div>
    </div>
    <se-bar :grayBg="true" :cates="cates1" bgc="#f7f8f9" />
    <ul class="subcates">
      <li>种类：</li>
      <li
        class="sc"
        v-for="(sc, index) in subcates1"
        :key="index"
        @click="setBorder(index)"
        :class="{ goldBorder: index == S1CurrentIndex }"
      >
        {{ sc }}
      </li>
    </ul>
    <se-bar :cates="cates2">
      <template v-slot:right>
        11111
      </template>
    </se-bar>
    <se-goods v-for="(gd, index) in 5" :key="index" />
    <ul class="descbar">
      <li class="side">首页</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>...</li>
      <li>20</li>
      <li class="side">尾页</li>
    </ul>
  </div>
</template>

<script>
import SeBar from "./SeBar.vue";
import SeGoods from "./SeGoods.vue";
export default {
  name: "SeExpo",
  components: {
    SeBar,
    SeGoods,
  },
  data() {
    return {
      cates1: ["成品", "材料"],
      cates2: ["最新", "最热门", "最便宜", "最贵"],
      subcates1: ["烤漆", "防腐漆", "建筑涂料", "地坪涂料", "塑胶漆", "木器漆"],
      S1CurrentIndex: 0,
    };
  },
  methods: {
    setBorder(index) {
      this.S1CurrentIndex = index;
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.seshow {
  position: relative;
  margin-top: 5%;
}
.seshow img {
  height: 100px;
}
.seshow .bottom {
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
}
.seshow .bottom img {
  width: 31%;
}
.seshow .text {
  position: absolute;
  top: 10%;
  left: 5%;
  color: #fff;
  line-height: 250%;
}
.seshow .text .f {
  font-size: 16px;
}
.seshow .text .s {
  color: rgba(255, 255, 255, 0.6);
}

.subcates {
  display: flex;
  padding: 5% 0;
}
.subcates .sc {
  flex-grow: 1;
  text-align: center;
}
.goldBorder {
  outline: 1px solid #d8a857;
  color: #d8a857;
}
.descbar {
  display: flex;
}
.descbar li {
  font-size: 4vw;
  flex-grow: 1;
  padding: 1% 0;
  text-align: center;
  margin-right: 1%;
}
.descbar li:hover {
  background-color: #d8a857;
  color: #fff;
}
.descbar .side {
  border: 1px solid #d8a857;
  color: #d8a857;
}
.descbar .side:hover {
  color: #fff;
}
</style>
