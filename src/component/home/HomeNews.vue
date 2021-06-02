<template>
  <div class="home-news">
    <ce-title>
      <template v-slot:cn>行业新闻</template>
      <template v-slot:en>INDUSTRY NEWS</template>
    </ce-title>
    <div class="more">查看更多</div>
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
    <div class="refresh">换一批</div>
  </div>
</template>

<script>
import CeTitle from "../content/CeTitle";
export default {
  name: "HomeNews",
  components: { CeTitle },
};
</script>

<style scoped>
.more {
  font-size: 12px;
  margin-right: 0.16rem;
  text-align: right;
  color: #b7b8c1;
}
.refresh {
  width: 1.2rem;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
  position: relative;
}
.refresh::before {
  content: "";
  width: 0.16rem;
  height: 0.16rem;
  border: 0.04em solid #b7b8c1;
  border-top: 0.14em solid transparent;
  border-radius: 100%;
  position: absolute;
  top: 0.15rem;
  right: 0;
  transform: rotate(45deg);
}
.refresh::after {
  content: "";
  position: absolute;
  border: 0.3em solid transparent;
  border-left: 0.4em solid #b7b7b7;
  right: -0.3em;
  top: 0.35em;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0.16rem;
}
.news {
  width: 3.42rem;
  font-size: 0.2rem;
  margin-bottom: 3%;
  transition: all 0.2s;
}
.news:hover {
  transform: translateY(0.05rem);
  box-shadow: 1px 1px 3px 2px rgb(65, 73, 78);
}
.news .cover {
  width: 3.42rem;
}
.news .cover img {
  width: 100%;
}
.text {
  height: 18vh;
  padding-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.text .title {
  font-weight: bold;
}
.text .time {
  color: rgb(136, 114, 114);
  font-size: 0.12rem;
}
.text .intro {
  color: #777777;
  height: 30%;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
}
</style>