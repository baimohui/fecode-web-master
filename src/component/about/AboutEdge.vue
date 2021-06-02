<template>
  <div class="aboutedge">
    <div class="img">
      <img src="~assets/image/about/p1.jpg" alt="" />
    </div>
    <ce-title>
      <template v-slot:cn>覆盖涂料产业上下游的八大子平台</template>
      <template v-slot:en
        >EIGHT SUB PLATFORMS OF COATING INDUSTRY'S UPSTREAM AND
        DOWNSTREAM</template
      >
    </ce-title>
    <ul class="pflist">
      <li class="pf">
        <div class="cover">
          <img src="~assets/image/about/p2.jpg" alt="" />
        </div>
        <div class="text">
          <div class="t">涂料技术研发平台-重磅金技</div>
          <div class="b">
            重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新
          </div>
        </div>
        <div class="todetail">点击查看详情</div>
      </li>
      <li class="pf">
        <div class="cover">
          <img src="~assets/image/about/p3.jpg" alt="" />
        </div>
        <div class="text">
          <div class="t">涂料技术研发平台-重磅金技</div>
          <div class="b">
            重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新
          </div>
        </div>
        <div class="todetail">点击查看详情</div>
      </li>
      <li class="pf">
        <div class="cover">
          <img src="~assets/image/about/p2.jpg" alt="" />
        </div>
        <div class="text">
          <div class="t">涂料技术研发平台-重磅金技</div>
          <div class="b">
            重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新
          </div>
        </div>
        <div class="todetail">点击查看详情</div>
      </li>
      <li class="pf">
        <div class="cover">
          <img src="~assets/image/about/p3.jpg" alt="" />
        </div>
        <div class="text">
          <div class="t">涂料技术研发平台-重磅金技</div>
          <div class="b">
            重磅金技，作为金色摇篮技术单元，通过平台中心实验室、高新
          </div>
        </div>
        <div class="todetail">点击查看详情</div>
      </li>
    </ul>
    <div class="loadmore">
      <span>查看更多</span>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
import CeTitle from "../../component/content/CeTitle.vue";
export default {
  name: "AboutEdge",
  components: {
    CeTitle,
  },
};
</script>

<style scoped>
/* @import url(); 引入公共css类 */
.aboutedge .img {
  text-align: center;
  background-color: #010216;
}
.pflist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.pflist .pf {
  width: 47%;
  font-size: 3vw;
  margin: 5% 0;
}
.pf .cover {
  text-align: center;
}
.pf .text .t {
  font-size: 3vw;
  font-weight: bold;
  line-height: 250%;
}
.pf .text .b {
  color: #79797b;
  line-height: 150%;
}
.pf .todetail {
  border: 1px #d8a857 solid;
  color: #d8a857;
  text-align: center;
  line-height: 300%;
  margin-top: 8%;
}
.loadmore {
  font-size: 2vw;
  text-align: center;
}
.loadmore span {
  border-bottom: 1px solid #79797b;
}
</style>
