<template>
  <div class="zone">
    <ce-title>
      <template v-slot:cn>供需专区</template>
      <template v-slot:en>THE ZONE SUPPLY AND DEMAND</template>
    </ce-title>

    <div class="sort">
      <div>
        <div class="img">
          <img src="~assets/image/supplyzone/z1.png" alt="" />
        </div>
        <p>重磅金济</p>
      </div>
      <div>
        <div class="img">
          <img src="~assets/image/supplyzone/z2.png" alt="" />
        </div>
        <p>供求金链</p>
      </div>
      <div>
        <div class="img">
          <img src="~assets/image/supplyzone/z3.png" alt="" />
        </div>
        <p>全域金代</p>
      </div>
      <div>
        <div class="img">
          <img src="~assets/image/supplyzone/z4.png" alt="" />
        </div>
        <p>天下金涂</p>
      </div>
    </div>


    <div class="detail">
      <div class="caption">
        <div class="head">溶剂专区</div>
        <div class="explain">
          <div class="f">墙面漆 涂料18L</div>
          <div class="m">油漆是一种能牢固覆盖在物体表面，起保护、装饰、标志和其他特殊用途的化学混合物，一定强度、连续的固态薄膜。这样形成的膜统称涂膜，又称漆膜或涂层...</div>
          <div class="l">了解详情 ></div>
        </div>
      </div>
      <div class="enter">进入专区</div>
    </div>
  </div>
</template>

<script>
import CeTitle from "../content/CeTitle.vue";
export default {
  components: { CeTitle },
  name: "SupplyZone",
};
</script>

<style scoped>
/* .zone {
  background-color: rgb(247, 245, 136);
} */
.sort {
  display: flex;
  justify-content: space-around;
  font-size: 0.24rem;
  /* border: 1px solid red; */
}
.sort > div {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.48rem;
  position: relative;
  /* border: 1px solid red; */
}
.sort >div:hover {
  color: #406efa;
}
.sort>div:hover::before {
  content: "";
  border: 0.25rem solid transparent;
  border-bottom-color: #000324;
  position: absolute;
  bottom: -0.5rem;
  left: 0.25rem;
}
.sort > div .img {
  width: 10vw;
  margin: 0 auto;
}
.detail {
  background-image: url("~assets/image/seabg.jpg");
  color: #fff;
  /* padding-bottom: 2px; */
  height: 5.85rem;
}
.detail .caption {
  width: 6.76rem;
  margin: 0 auto;
  padding-top: 0.39rem;
}
.detail .caption .head {
  height: 0.7rem;
  line-height: 0.7rem;
  padding-left: 0.38rem;
  font-size: 0.24rem;
  font-weight: bold;
  background-color: #4065d0;
}
.detail .caption .explain {
  padding-left: 0.38rem;
  font-size: 0.1rem;
  height: 3.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 0.2rem;
  border: 1px solid rgb(109, 97, 97);
  border-top: none;
}
.detail .caption .explain .f {
  font-size: 0.24rem;
  padding-top: 2%;
}
.detail .caption .explain .m {
  line-height: 200%;
  color: #B7B8C1;
}
.detail .caption .explain .l {
  width: 1.93rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #d4aa58;
  border: 1px solid #d4aa58;
}
.detail .enter {
  width: 2.58rem;
  height: 0.65rem;
  line-height: 0.65rem;
  font-size: 0.24rem;
  background-color: #d4aa58;
  text-align: center;
  margin: 0 auto;
  margin-top: 0.32rem;
}
</style>