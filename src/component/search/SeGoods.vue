<template>
  <div class="segoods">
    <div class="drum">
      <img src="~assets/image/search/oildrum.jpg" alt="" />
    </div>
    <div class="desc">
      <div class="t">NR-950金红石型钛白粉</div>
      <div class="b">
        <ul class="l">
          <li>种类：Dulux</li>
          <li>参数：哑光</li>
          <li>产地：中国大陆</li>
          <li>型号：A8607</li>
        </ul>
        <div class="r" @click="clickDetail">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../../../eventBus"
export default {
  name: "SeGoods",
  methods: {
    clickDetail() {
      eventBus.$emit("detailClicked");
    },
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.segoods {
  height: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.segoods:hover {
  outline: 1px solid #d8a857;
}
.segoods .drum img {
  height: 20vw;
}
.desc {
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.desc .t {
  padding-left: 2%;
  font-weight: bold;
}
.desc .b {
  display: flex;
  justify-content: space-around;
  height: 6vh;
}
.desc .b .l {
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.desc .b .l li {
  width: 50%;
  font-size: 2vw;
  transform: scale(.8);
}
.desc .b .r {
  padding: 3% 2%;
  background-color: #d8a857;
  color: #fff;
  font-size: 2vw;
  margin-right: 2%;
}
.desc .b .r:hover {
  background-color: red;
}
</style>
