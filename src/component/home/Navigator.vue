<template>
  <div class="nav">
    <div class="title">
      <img src="~assets/image/about/city.png" alt="" />
      <span>产业链导航</span>
    </div>
    <ul class="list">
      <li class="collapsed" v-for="(item, index) in 7" :key="index">
        <div class="t">
          <div class="l">01</div>
          <div class="m">原材料货物</div>
          <!-- <div class="r">
            <img src="~assets/image/about/downarrow.png" alt="" />
          </div> -->
          <div class="r"></div>
        </div>
        <div class="b">
          <div>原材料爆款好货</div>
          <div>原材料新品推荐</div>
          <div>原材料集约化采购</div>
          <div>原材料采购需求并链</div>
          <div>供应链优化</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  methods: {
    
  },
};
</script>

<style scoped>
.nav {
  padding-top: 0.86rem;
  padding-bottom: 0.56rem;
  background-color: #000324;
  color: #fff;
}
.title {
  text-align: center;
  height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.31rem;
}
.title img {
  height: 0.72rem;
}
.list {
  margin-top: 0.24rem;
}
.list li {
  background-color: #283e76;
  width: 7.23rem;
  margin: 0.14rem auto;
  overflow: hidden;
  /* transition: height 3s; */
}
.list li:hover .b {
  max-height: 5rem;
  padding: 0.22rem 0;
}
.list li:hover .t .r {
  transform: rotateZ(-45deg) translateX(-0.09rem);
}
.list li .t {
  height: 0.8rem;
  line-height: 0.8rem;
  /* display: flex; */
  position: relative;
  border-bottom: 1px solid #000324;
  font-size: 0.24rem;
}
.list li .t .l {
  position: absolute;
  left: 0.34rem;
}
.list li .t .m {
  position: absolute;
  left: 0.94rem;
  color: #d4aa58;
}
.list li .t .r {
  width: 0.24rem;
  height: 0.24rem;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transform: rotateZ(45deg);
  transition: all 0.5s;
  position: absolute;
  right: 0.26rem;
  top: 0.2rem;
}
.list li .b {
  box-sizing: border-box;
  max-height: 0;
  transition: all 0.8s;
}
.list li .b div {
  height: 0.62rem;
  line-height: 0.62rem;
  font-size: 0.22rem;
  margin-left: 0.94rem;
  position: relative;
  /* border: 1px solid red; */
}
.list li .b div::before {
  content: "";
  width: 0.06rem;
  height: 0.06rem;
  position: absolute;
  top: 0.3rem;
  left: -0.2rem;
  background: #d8a857;
}
</style>