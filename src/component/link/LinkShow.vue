<template>
  <div class="linkshow">
    <div class="former">
      <div class="t">买新品，买爆款，就用供求金链</div>
      <div class="m"><img src="~assets/image/link/l2.jpg" alt="" /></div>
      <ul class="b">
        <li><img src="~assets/image/link/l3.jpg" alt="" /></li>
        <li><img src="~assets/image/link/l4.jpg" alt="" /></li>
        <li><img src="~assets/image/link/l5.jpg" alt="" /></li>
        <li><img src="~assets/image/link/l6.jpg" alt="" /></li>
      </ul>
    </div>
    <div class="later">
      <div class="t">精选爆款</div>
      <ul class="m">
        <li>
          <div class="f">爆款树脂</div>
          <div class="s">
            <div class="l">爆款树脂发布</div>
            <div class="r">爆款树脂</div>
          </div>
        </li>
        <li>
          <div class="f">爆款树脂</div>
          <div class="s">
            <div class="l">爆款树脂发布</div>
            <div class="r">爆款树脂</div>
          </div>
        </li>
        <li>
          <div class="f">爆款树脂</div>
          <div class="s">
            <div class="l">爆款树脂发布</div>
            <div class="r">爆款树脂</div>
          </div>
        </li>
        <li>
          <div class="f">爆款树脂</div>
          <div class="s">
            <div class="l">爆款树脂发布</div>
            <div class="r">爆款树脂</div>
          </div>
        </li>
        <li>
          <div class="f">爆款树脂</div>
          <div class="s">
            <div class="l">爆款树脂发布</div>
            <div class="r">爆款树脂</div>
          </div>
        </li>
        <li>
          <div class="f">爆款树脂</div>
          <div class="s">
            <div class="l">爆款树脂发布</div>
            <div class="r">爆款树脂</div>
          </div>
        </li>
      </ul>
      <div class="b">查看更多</div>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "LinkShow",
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.linkshow {
  font-size: 4vw;
}
.former .t {
  color: #eac69c;
  text-align: center;
  line-height: 300%;
  background-image: url("~assets/image/link/l1.jpg");
  background-size: cover;
}
.former .m {
  text-align: center;
}
.former .b {
  display: flex;
  justify-content: space-between;
}
.former .b li {
  padding-top: 1%;
  width: 24%;
}
.later {
  width: 92%;
  margin: 3% auto;
  background-color: #fdfcfc;
}
.later .t {
  line-height: 300%;
  text-align: center;
  color: #fff;
  background-color: #d8a857;
}
.later .m {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.later .m li {
  width: 40%;
  line-height: 200%;
  padding-top: 2%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.later .m li .f {
  font-weight: bold;
}
.later .m li .s {
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
  color: rgba(0, 0, 0, 0.6);
}
.later .b {
  font-size: 2vw;
  font-weight: bold;
  color: #d8a857;
  line-height: 300%;
  text-align: center;
}
</style>
