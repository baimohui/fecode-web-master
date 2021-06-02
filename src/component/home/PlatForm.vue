<template>
  <div class="pfwrapper">
    <ul class="pf">
      <li>
        <div class="icon"><img src="~assets/image/home/h1.png" alt="" /></div>
        <div class="text">
          <div class="cn">成品涂料销售代工平台</div>
          <div class="en">Finished coating sales OEM platform</div>
        </div>
      </li>
      <li>
        <div class="icon"><img src="~assets/image/home/h2.png" alt="" /></div>
        <div class="text">
          <div class="cn">原材料供应链平台</div>
          <div class="en">Raw material supply chain platform</div>
        </div>
      </li>
      <li>
        <div class="icon"><img src="~assets/image/home/h3.png" alt="" /></div>
        <div class="text">
          <div class="cn">金色摇篮平台介绍</div>
          <div class="en">Golen cradle platform introduction</div>
        </div>
      </li>
      <li>
        <div class="icon"><img src="~assets/image/home/h4.png" alt="" /></div>
        <div class="text">
          <div class="cn">涂料技术研发平台</div>
          <div class="en">Coating technology R % D platform</div>
        </div>
      </li>
      <li>
        <div class="icon"><img src="~assets/image/home/h5.png" alt="" /></div>
        <div class="text">
          <div class="cn">成品涂料交易平台</div>
          <div class="en">Finished paint trading OEM platform</div>
        </div>
      </li>
    </ul>
    <div class="arrow"></div>
  </div>
</template>

<script>
export default {
  name: "PlatForm",
};
</script>

<style scoped>
.pfwrapper {
  background-color: #406efa;
  margin: 0.15rem 0.14rem 0.19rem 0.14rem;
  height: 8.1rem;
  width: 7.22rem;
  /* border: 1px solid red; */
  position: relative;
}
.pf {
  height: 7rem;
  /* border: 1px solid red; */
  color: #fff;
  /* padding-bottom: 0.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pfwrapper::before,
.pfwrapper::after {
  position: absolute;
  left: -0.14rem;
  right: -0.14rem;
  top: -0.15rem;
  bottom: -0.19rem;
  border-style: solid;
  border-color: #000324;
  border-width: 0.15rem 0.14rem 0.19rem 0.14rem;
  content: "";
  animation: move 5s linear infinite;
}
.pfwrapper::after {
  /* border-color: #f66; */
  animation-delay: -2.5s;
}
@keyframes move {
  0%,
  100% {
    clip: rect(0 7.5rem 0.15rem 0);
  }
  25% {
    clip: rect(0 7.5rem 8.44rem 7.36rem);
  }
  50% {
    clip: rect(8.25rem 7.5rem 8.44rem 0);
  }
  75% {
    clip: rect(0 0.14rem 8.44rem 0);
  }
}
.pf li {
  display: flex;
  /* align-items: flex-end; */
  margin-left: 0.76rem;
  /* padding-top: 0.22rem; */
  height: 1.2rem;
}
.pf li:first-child {
  margin-top: 0.4rem;
}
.pf .text {
  /* border: 1px solid blue; */
  padding-top: 0.16rem;
  padding-left: 0.1rem;
}
.pf li .cn {
  font-size: 0.28rem;
}
.pf li .en {
  font-size: 0.24rem;
}
.pf img {
  width: 1rem;
}
.arrow {
  width: 1.24rem;
  height: 0.26rem;
  margin-top: 0.4rem;
  border-bottom: 0.02rem solid #fff;
  border-right: 0.02rem solid #fff;
  transform: skewX(45deg) translateX(3.04rem);
}
</style>