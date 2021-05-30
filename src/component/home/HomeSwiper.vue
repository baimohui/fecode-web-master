<template>
  <div class="home-swiper">
    <swiper class="swiper">
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
      <form class="table" action="#">
        <div class="search">
          <img src="~assets/image/search.png" alt="" />
        </div>
        <input class="input" type="text" />
        <!-- <input class="submit" type="submit" value="搜索" /> -->
        <div class="submit">
          <nuxt-link :to="{ name: 'search' }">搜索 </nuxt-link>
        </div>
      </form>
      <div>
        <nuxt-link :to="{ name: 'material'}"><img src="~assets/image/person.png" alt="" /></nuxt-link>
      </div>
      <div>
        <a href="#"><img src="~assets/image/menu.png" alt="" /></a>
      </div>
    </div>
    <ul class="col">
      <li><nuxt-link :to="{ name: 'about' }">专业平台</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'link' }">供求金链</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'contact' }">联系我们</nuxt-link></li>
    </ul>
    <div class="caption">
      <div class="en">CREATE THE INTERCONNECTION<br/>OF COATING INDUSTRY</div>
      <div class="cn">金色摇篮<br/>全面架构涂料产业智联互通</div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../common/swiper/index.js";
export default {
  name: "HomeSwiper",
  props: {},
  components: { Swiper, SwiperItem },
  data() {
    return {};
  },
};
</script>

<style scoped>
.home-swiper {
  position: relative;
}
.swiper {
  height: 30vh;
}
.row {
  width: 230px;
  display: flex;
  justify-content: space-evenly;
  height: 25px;
  line-height: 25px;
  position: absolute;
  top: 7%;
  right: 3%;
}
.row img {
  width: 18px;
  padding-top: 5px;
}
.table {
  width: 170px;
  border: 1px solid #fff;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
}
.table .search img {
  width: 19px;
  padding-top: 5px;
  padding-left: 6px;
}
.input {
  border: none;
  outline: none;
  width: 110px;
  background-color: transparent;
}
.submit {
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #fff;
  padding-right: 3px;
}
.col {
  padding: 5px 0;
  width: 100px;
  text-align: center;
  position: absolute;
  color: #d4aa58;
  top: 55px;
  right: 0;
  background-color: rgba(22, 22, 22, 0.5);
}
.col li {
  height: 38px;
  line-height: 38px;
}
.caption {
  position: absolute;
  top: 40%;
  left: 12%;
  font-size: 12px;
  font-weight: bold;
  line-height: 120%;
}
.caption .en{
  /* font-size: 12px; */
  color: #d8a857;
  padding-bottom: 3%;
}
.caption .cn {
  color: #fff;
  font-size: 14px;
}
</style>
