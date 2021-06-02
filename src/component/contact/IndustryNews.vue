<template>
  <div id="indn">
    <div class="lists">
      <div class="front">
        <div class="head">
          <div class="l">行业新闻</div>
          <div class="r">查看更多</div>
        </div>
        <ul class="nlist">
          <li class="news">
            <div class="t1">金色摇篮携智慧系统亮相2019中国国际涂料展</div>
            <div class="t2">2019-11-20 11:53:09</div>
          </li>
          <li class="news">
            <div class="t1">2019涂料工业大盘点及未来趋势</div>
            <div class="t2">2019-11-20 11:53:09</div>
          </li>
          <li class="news">
            <div class="t1">天津出台“十三五”VOCs减排方案 油性漆或再遭寒冬</div>
            <div class="t2">2019-11-20 11:53:09</div>
          </li>
        </ul>
      </div>
      <div class="end">
        <div class="head">让我们与您联系</div>
        <ul class="commute">
          <li class="l">
            留下您的联系方式，我们的专业顾问会在一日内与您联系。
          </li>
          <li class="r">现在预约</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryNews",
};
</script>

<style scoped>
#indn {
  margin-top: 3%;
}
#indn .lists {
  background-image: url("~assets/image/newsbgi.jpg");
  padding: 5% 0;
  font-size: 3vw;
}
.lists .front {
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
  padding: 4%;
}
.lists .front .head {
  display: flex;
  justify-content: space-between;
}
.lists .front .head .r {
  color: #7b7b7b;
  font-size: 2vw;
}
.nlist {
  font-size: 2vw;
}
.nlist .news {
  margin-top: 10px;
}
.nlist .news .t2 {
  color: #7b7b7b;
}
.end {
  width: 90%;
  background-color: #fff;
  margin: 20px auto;
  padding: 4%;
}
.end .head {
  font-size: 4vw;
}
.end .commute {
  display: flex;
  justify-content: space-between;
}
.end .commute .l {
  font-size: 2vw;
  width: 60%;
  color: #7b7b7b;
}
.end .commute .r {
  width: 24vw;
  height: 5vh;
  line-height: 5vh;
  color: #fff;
  text-align: center;
  background-color: #d4aa58;
}
</style>