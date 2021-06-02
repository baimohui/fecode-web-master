<template>
  <div class="home-swiper">
    <swiper class="sswiper">
      <swiper-item>
        <a>
          <img src="~assets/image/unibgi.jpg" />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img src="~assets/image/newspic2.jpg" />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img src="~assets/image/unibgi.jpg" />
        </a>
      </swiper-item>
      <swiper-item>
        <a>
          <img src="~assets/image/newspic2.jpg" />
        </a>
      </swiper-item>
    </swiper>
    <div class="row">
      <div class="jelee">
        <img src="~assets/image/about/jelee.png" alt="" />
      </div>
      <form class="table" action="#">
        <div class="search">
          <img src="~assets/image/search.png" alt="" />
        </div>
        <input class="input" type="text" />
        <!-- <input class="submit" type="submit" value="搜索" /> -->
        <div class="submit">
          <nuxt-link :to="{ name: 'index' }">搜索 </nuxt-link>
        </div>
      </form>
      <div class="ricon">
        <nuxt-link :to="{ name: 'material' }"
          ><img src="~assets/image/person.png" alt=""
        /></nuxt-link>
      </div>
      <div class="container">
        <input class="nav-checkbox" id="toggle" type="checkbox" />
        <label class="nav-label" for="toggle">
          <i class="icon icon-menu"></i>
        </label>
      </div>
    </div>
    <ul class="col">
      <li><nuxt-link :to="{ name: 'about' }">专业平台</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'link' }">供求金链</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'contact' }">联系我们</nuxt-link></li>
    </ul>
    <div class="caption">
      <div class="en">CREATE THE INTERCONNECTION<br />OF COATING INDUSTRY</div>
      <div class="cn">金色摇篮</div>
      <div class="cn">全面架构涂料产业智联互通</div>
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
.container {
  width: 0.36rem;
  height: 0.5rem;
  position: relative;
  top: -0.4rem;
}
.icon-menu,
.icon-menu::before,
.icon-menu::after {
  width: 0.33rem;
  height: 0.07rem;
  background-color: rgba(255,255,255,.8);
  display: block;
  transition: all 0.3s;
}
.icon-menu {
  position: relative;
}
.icon-menu::before,
.icon-menu::after {
  position: absolute;
  content: "";
}
.icon-menu::before {
  top: -0.12rem;
}
.icon-menu::after {
  top: 0.12rem;
}
#toggle:checked ~ label .icon-menu {
  transform: rotate(225deg);
}
#toggle:checked ~ label .icon-menu::before {
  top: 0;
  transform: rotate(90deg);
}
#toggle:checked ~ label .icon-menu::after {
  top: 0;
}

.home-swiper {
  position: relative;
  height: 4.12rem;
}
.sswiper {
  height: 4.12rem;
}
.row {
  width: 7rem;
  height: 0.56rem;
  line-height: 0.56rem;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 0.36rem;
  right: 0.08rem;
  /* border: 1px solid red; */
}
.row .jelee {
  display: flex;
  align-items: center;
}
.row .jelee img {
  width: 2.04rem;
}
.row .ricon img {
  width: 0.34rem;
  padding-top: 0.14rem;
}
.table {
  width: 3.42rem;
  border: 1px solid #fff;
  border-radius: 0.28rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0.24rem;
}
.table .search {
  height: 0.3rem;
  padding-left: 0.12rem;
}
.table .search img {
  width: 0.3rem;
}
.input {
  border: none;
  outline: none;
  width: 60%;
  background-color: transparent;
}
.submit {
  background-color: transparent;
  border: none;
  font-size: 0.24rem;
  color: #fff;
  padding-right: 0.15rem;
}
.col {
  height: 2.22rem;
  width: 1.9rem;
  text-align: center;
  position: absolute;
  color: #d4aa58;
  top: 1rem;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.col li {
  font-size: 0.24rem;
  height: 0.74rem;
  line-height: 0.74rem;
}
.col li:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.caption {
  position: absolute;
  top: 1.65rem;
  left: 0.78rem;
  font-size: 0.12rem;
  font-weight: bold;
}
.caption .en {
  color: #d8a857;
  font-size: 0.2364rem;
  line-height: 120%;
  padding-bottom: 0.05rem;
}
.caption .cn {
  color: #fff;
  font-size: 0.3rem;
  line-height: 120%;
}
/* @media screen and (min-width: 1000px) {
  .caption .cn {
    padding-top: 4%;
  }
} */
</style>
