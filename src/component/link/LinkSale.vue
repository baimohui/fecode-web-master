<template>
  <div class="linksale">
    <ce-title>
      <template v-slot:cn>限时采集清单</template>
      <template v-slot:en>FLASH SALE</template>
    </ce-title>
    <div class="content">
      <ul class="cates">
        <li>正在发布</li>
        <li>即将开始</li>
        <li>查看更多</li>
      </ul>
      <ul class="salelist">
        <li v-for="(item, index) in 3" :key="index">
          <div class="cover">
            <img src="~assets/image/search/drum1.png" alt="" />
          </div>
          <div class="desc">
            <div class="t">
              NR-950金红石型钛白粉 通用型二氧化钛 高遮盖钛白粉
            </div>
            <div class="m">
              <div class="total">
                <div class="proceed">
                  <div>50%</div>
                </div>
              </div>
              <div class="tt">共300吨</div>
            </div>
            <div class="b">
              <div>价格：</div>
              <div class="br">￥15500.00</div>
              <div class="pink">超值特惠</div>
            </div>
          </div>
          <div class="flash">
            <div class="t">距离本次活动结束</div>
            <ul class="m">
              <li class="hour">06</li>
              :
              <li class="minute">12</li>
              :
              <li class="second">10</li>
            </ul>
            <div class="b">马上抢</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CeTitle from "../content/CeTitle.vue";
export default {
  name: "LinkSale",
  props: {},
  components: { CeTitle },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.linksale {
  font-size: 4vw;
  background-color: #fdfcfc;
}
.content {
  width: 92%;
  margin: 0 auto;
  font-size: 12px;
}
.content .cates {
  display: flex;
  color: #fff;
  background-color: #0b294d;
}
.content .cates li {
  flex: 1;
  line-height: 300%;
  text-align: center;
}
.content .cates li:hover {
  background-color: #d8a857;
}
.content .salelist .flash {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 13vh;
  width: 30%;
}
.content .salelist .flash .t {
  color: rgba(0, 0, 0, 0.8);
}

.salelist > li {
  display: flex;
  line-height: 120%;
  margin: 4% 0;
}
.salelist .cover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
}
.salelist .cover img {
  width: 75%;
}
.salelist .desc {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 6%;
  /* outline: 1px solid red; */
}
.salelist .desc .m {
  display: flex;
  align-items: center;
  font-size: 3vw;
  color: rgba(0, 0, 0, 0.6);
}
.salelist .desc .m .total {
  width: 70%;
  height: 2vw;
  border-radius: 1vw;
  background-color: #f2f3f5;
}
.salelist .desc .m .total .proceed {
  width: 60%;
  height: 100%;
  line-height: 60%;
  border-radius: 1vw;
  background-color: #d8a857;
  text-align: center;
  font-size: 2vw;
  color: #fff;
}
.proceed div {
  transform: scale(0.7);
}
.salelist .desc .b {
  font-size: 2vw;
  width: 110%;
  transform: scale(0.9);
  display: flex;
  justify-content: space-between;
}
.salelist .desc .b .br {
  color: red;
  font-size: 16px;
  flex: 1;
}
.salelist .desc .b .pink {
  position: relative;
  padding: 1% 2%;
  color: #fff;
  background-color: #f47a86;
  /* outline: 1px solid red; */
}
.salelist .desc .b .pink::before {
  content: "";
  display: inline-block;
  border-width: 6px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #f47a86;
  position: absolute;
  bottom: 0;
  left: -10%;
}

.flash .t {
  width: 110%;
  font-size: 2vw;
  transform: scale(0.9);
  color: rgba(0, 0, 0, 0.4);
}
.flash .m {
  /* width: 28%; */
  display: flex;
  justify-content: space-between;
}
.flash .m li {
  padding: 1% 4%;
  color: #fff;
  background-color: #7c7c7d;
}
.flash .b {
  /* width: 28%; */
  color: #fff;
  font-size: 14px;
  line-height: 250%;
  background-color: red;
  text-align: center;
}
</style>
