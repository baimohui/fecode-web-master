<template>
  <div class="home-news">
    <div class="btitle">
      <h1 class="cn">行业新闻</h1>
      <p class="en">INDUSTRY NEWS</p>
    </div>
    <ul class="list">
      <li class="news">
        <div class="cover">
          <img src="~assets/image/newspic1.jpg" alt="" />
        </div>
        <div class="text">
          <div class="title">金色摇篮携智慧系统亮相2019中国国际涂料展</div>
          <div class="time">2019-11-20 11:53:09</div>
          <div class="intro">
            2017年7月17日，吉力公司举行了一个简单而庄重的新照片揭牌仪式科
          </div>
        </div>
      </li>
      <li class="news">
        <div class="cover">
          <img src="~assets/image/newspic2.jpg" alt="" />
        </div>
        <div class="text">
          <div class="title">2019涂料工业大盘点及未来趋势发展调查</div>
          <div class="time">2019-11-20 11:53:09</div>
          <div class="intro">
            2017年7月17日，吉力公司举行了一个简单而庄重的新照片揭牌仪式科
          </div>
        </div>
      </li>
      <li class="news">
        <div class="cover">
          <img src="~assets/image/newspic1.jpg" alt="" />
        </div>
        <div class="text">
          <div class="title">金色摇篮携智慧系统亮相2019中国国际涂料展</div>
          <div class="time">2019-11-20 11:53:09</div>
          <div class="intro">
            2017年7月17日，吉力公司举行了一个简单而庄重的新照片揭牌仪式科
          </div>
        </div>
      </li>
      <li class="news">
        <div class="cover">
          <img src="~assets/image/newspic2.jpg" alt="" />
        </div>
        <div class="text">
          <div class="title">2019涂料工业大盘点及未来趋势发展调查</div>
          <div class="time">2019-11-20 11:53:09</div>
          <div class="intro">
            2017年7月17日，吉力公司举行了一个简单而庄重的新照片揭牌仪式科
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
};
</script>

<style scoped>
.btitle {
  margin: 20px auto;
  font-size: 14px;
  width: 60%;
  text-align: center;
}
.btitle .en {
  font-size: 12px;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.news {
  width: 50%;
  font-size: 12px;
  padding-bottom: 20px;
}
.news .cover {
  width: 94%;
  margin: 0 auto;
}
.news .cover img {
  width: 100%;
}
.text {
  height: 130px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.text .title {
  font-weight: bold;
}
.text .time {
  color: rgb(136, 114, 114);
}
.text .intro {
  color: rgb(37, 31, 31);   
}
</style>