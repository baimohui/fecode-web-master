<template>
  <div class="zone">
    <div class="title">
      <h1 class="cn">供需专区</h1>
      <p class="en">THE ZONE SUPPLY AND DEMAND</p>
    </div>
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
          <div class="l">了解详情></div>
        </div>
      </div>
      <div class="enter">进入专区</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupplyZone",
};
</script>

<style scoped>
/* .zone {
  background-color: rgb(247, 245, 136);
} */
.title {
  margin: 20px auto;
  width: 60%;
  font-size: 14px;
  text-align: center;
}
.title .en {
  font-size: 12px;
}
.sort {
  display: flex;
  justify-content: space-around;
}
.sort > div {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.sort > div .img {
  width: 40px;
  margin: 3px auto;
}
.detail {
  background-image: url("~assets/image/seabg.jpg");
  color: #fff;
  padding-bottom: 2px;
}
.detail .caption {
  width: 90%;
  margin: 0 auto;
  padding-top: 15px;
}
.detail .caption .head {
  height: 35px;
  line-height: 35px;
  padding-left: 20px;
  background-color: #4065D0;
}
.detail .caption .explain {
  padding-left: 20px;
  font-size: 12px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px;
  border: 1px solid rgb(109, 97, 97);
  border-top: none;
}
.detail .caption .explain .f {
  font-size: 14px;
  padding-top: 5px;
}
.detail .caption .explain .m {
  line-height: 200%;
}
.detail .caption .explain .l {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #D4AA58;
  border: 1px solid #D4AA58;
}
.detail .enter {
  width: 110px;
  height: 30px;
  font-size: 12px;
  background-color: #D4AA58;
  text-align: center;
  line-height: 30px;
  margin: 20px auto;
}
</style>