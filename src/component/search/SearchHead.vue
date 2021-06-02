<template>
  <div class="searchhead">
    <div class="mark"><img src="~assets/image/search/icon.png" alt="" /></div>
    <div class="icons">
      <div class="search">
        <img src="~assets/image/search/gsearch.png" alt="" />
      </div>
      <div class="person">
        <img src="~assets/image/search/gperson.png" alt="" />
      </div>
      <div class="menu">
        <nuxt-link :to="{ name: 'index' }">
          <img src="~assets/image/search/gmenu.png" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHead",
};
</script>

<style scoped>
.searchhead {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
}
.searchhead .mark {
  height: 20px;
  padding-left: 4%;
  line-height: 50px;
}
.searchhead .mark img {
  height: 20px;
}
.searchhead .icons {
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  height: 20px;
}
.searchhead .icons img {
  width: 20px;
}
</style>