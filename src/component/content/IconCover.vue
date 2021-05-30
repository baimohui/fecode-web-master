<template>
  <div class="iconcover" :style="setHeight">
    <ul class="icons">
      <li>
        <nuxt-link :to="{ name: 'search' }"
          ><img src="~assets/image/search.png" alt=""
        /></nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'index' }"
          ><img src="~assets/image/person.png" alt=""
        /></nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'index' }"
          ><img src="~assets/image/menu.png" alt=""
        /></nuxt-link>
      </li>
    </ul>
    <div class="text">
      <p class="f"><slot name="f"></slot></p>
      <p class="s">
        <slot name="s"> </slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconCovered",
  props: {
    height: {
      type: Number,
      default: 25,
    },
  },
  computed: {
    setHeight() {
      return { height: this.height + "vh" }
    }
  }
};
</script>

<style scoped>
.iconcover {
  /* height: 150px; */
  background-image: url("~assets/image/jbgi.jpg");
  background-size: cover;
  position: relative;
}
.icons {
  width: 120px;
  position: absolute;
  top: 7%;
  right: 3%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid greenyellow; */
}
.icons img {
  width: 20px;
}
.icons li {
  height: 20px;
  /* line-height: 20px; */
}
.text {
  width: 76%;
  position: absolute;
  top: 35%;
  left: 13%;
  font-size: 14px;
  color: #fff;
}
.text .f {
  font-size: 16px;
}
.text .s {
  line-height: 120%;
  font-size: 12px;
  padding-top: 1%;
}
</style>
