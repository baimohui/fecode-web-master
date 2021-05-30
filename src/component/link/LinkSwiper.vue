<template>
  <div class="linkswiper">
    <swiper class="swiper" dotPosition=60>
      <swiper-item>
        <a>
          <img src="~assets/image/jbgi.jpg" />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img src="~assets/image/jbgi.jpg" />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img src="~assets/image/jbgi.jpg" />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img src="~assets/image/unibgi.jpg" />
        </a>
      </swiper-item>
    </swiper>
    <div class="row">
      <div>
        <nuxt-link :to="{ name: 'search' }"
          ><img src="~assets/image/search.png" alt=""
        /></nuxt-link>
      </div>
      <div>
        <nuxt-link :to="{ name: 'search' }"
          ><img src="~assets/image/person.png" alt=""
        /></nuxt-link>
      </div>
      <div>
        <nuxt-link :to="{ name: 'index' }"
          ><img src="~assets/image/menu.png" alt=""
        /></nuxt-link>
      </div>
    </div>
    <div class="caption">
      <div class="en">CREATE THE INTERCONNECTION<br />OF COATING INDUSTRY</div>
      <div class="cn">金色摇篮<br />全面架构涂料产业智联互通</div>
    </div>
    <ul class="categories">
      <li class="line">
        <div class="t">爆款好货</div>
        <div class="b">正规渠道 一网总揽 严把品质</div>
      </li>
      <li class="line">
        <div class="t">集采并链</div>
        <div class="b">集中需求 分类整理 成本优化</div>
      </li>
      <li class="line">
        <div class="t">快速销售</div>
        <div class="b">原材料厂商 贸易商专区</div>
      </li>
      <li>
        <div class="t">关于我们</div>
        <div class="b">产品互联 八大平台 三大计划</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../common/swiper/index.js";
export default {
  name: "LinkSwiper",
  props: {},
  components: { Swiper, SwiperItem },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.linkswiper {
  position: relative;
  font-size: 14px;
}
/* .swiper {
  height: 30vh;
} */
.row {
  /* border: 1px solid red; */
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  height: 25px;
  line-height: 25px;
  position: absolute;
  top: 4%;
  right: 0;
}
.row img {
  /* border: 1px solid blue; */
  width: 16px;
  padding-top: 5px;
}
.caption {
  position: absolute;
  top: 26%;
  left: 8%;
  font-weight: bold;
  line-height: 120%;
}
.caption .en {
  /* font-size: 12px; */
  color: #d8a857;
  padding-bottom: 3%;
}
.caption .cn {
  color: #fff;
}
.categories {
  position: absolute;
  bottom: 3%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: #fff;
}
.categories li {
  position: relative;
  padding: 0% 3%;
}
.categories li.line::after {
  content: "";
  width: 1px;
  height: 60%;
  position: absolute;
  top: 30%;
  right: 0%;
  background: rgba(255, 255, 255, 0.7);
}
.categories .b {
  font-size: 8px;
  opacity: 0.6;
  line-height: 120%;
}
</style>
