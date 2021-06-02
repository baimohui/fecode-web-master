<template>
  <div class="secommend">
    <div class="cm4u">为你推荐</div>
    <ul class="cmlist">
      <li>
        <div class="img">
          <img src="~assets/image/search/drum1.png" alt="" />
        </div>
        <div class="name">墙面漆 涂料18L</div>
      </li>
      <li>
        <div class="img">
          <img src="~assets/image/search/drum2.png" alt="" />
        </div>
        <div class="name">墙面漆 涂料18L</div>
      </li>
      <li>
        <div class="img">
          <img src="~assets/image/search/drum3.png" alt="" />
        </div>
        <div class="name">墙面漆 涂料18L</div>
      </li>
      <li>
        <div class="img">
          <img src="~assets/image/search/drum3.png" alt="" />
        </div>
        <div class="name">墙面漆 涂料18L</div>
      </li>
      <li>
        <div class="img">
          <img src="~assets/image/search/drum2.png" alt="" />
        </div>
        <div class="name">墙面漆 涂料18L</div>
      </li>
      <li>
        <div class="img">
          <img src="~assets/image/search/drum1.png" alt="" />
        </div>
        <div class="name">墙面漆 涂料18L</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "SeCommend",
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.secommend {
  font-size: 2vw;
}
.cm4u {
  background-image: url("~assets/image/search/recommendbg.jpg");
  color: #fff;
  padding-left: 3%;
  height: 8vw;
  line-height: 8vw;
  margin: 8% 0;
}
.cmlist {
  display: flex;
  flex-wrap: wrap;
}
.cmlist li {
  width: 30vw;
  text-align: center;
  margin-bottom: 8%;
}
.cmlist li img {
  width: 15vw;
}
</style>
