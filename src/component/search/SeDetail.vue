<template>
  <div class="sedetail">
    <div class="snapshot">
      <div class="bp"><img src="~assets/image/search/drum1.png" alt="" /></div>
      <ul class="sps">
        <li><img src="~assets/image/search/drum1.png" alt="" /></li>
        <li><img src="~assets/image/search/drum1.png" alt="" /></li>
        <li><img src="~assets/image/search/drum1.png" alt="" /></li>
        <li><img src="~assets/image/search/drum1.png" alt="" /></li>
      </ul>
      <div class="text">
        <div class="t">NR-950金红石型钛白粉 通用型二氧化钛高遮盖钛白粉</div>
        <ul class="m">
          <li>种类：Dulux/多乐士</li>
          <li>产地：中国大陆</li>
          <li>型号：A8607-65016</li>
          <li>参数：哑光</li>
        </ul>
        <ul class="b">
          <li>产品咨询</li>
          <li>立即询价</li>
          <li>定制服务</li>
          <li>寻求代工</li>
        </ul>
      </div>
    </div>
    <div class="picdt">
      <div class="title">图片详情</div>
      <div class="cover"><img src="~assets/image/search/goodscover.jpg" alt=""></div>
      <div class="text">
        <div class="title">NR-950金红石型钛白粉</div>
        <div class="b"><br/>涂料，在中国传统名称为油漆。所谓涂料是涂覆在被保护或被装饰的物体表面，并能与被涂物形成牢固附着的连续薄膜，通常是以树脂、或油、或乳液为主，添加或不添加颜料、填料，添加相应助剂，用有机溶剂或水配制而成的粘稠液体。<br/><br/>中国涂料界比较权威的《涂料工艺》一书是这样定义的：“涂料是一种材料，这种材料可以用不同的施工工艺涂覆在物件表面，形成粘附牢固、具有一定强度、连续的固态薄膜。这样形成的膜通称涂膜，又称漆膜或涂层。”</div>
      </div>
    </div>
  </div>
</template>

<script>
// 此行导入其他文件（如组件，工具js，第三方插件js，json文件，图片文件等）
export default {
  name: "SeDetail",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.snapshot {
  /* border: 1px solid purple; */
  height: 19vh;
  display: flex;
  align-items: center;
  margin: 5% 0;
}
.snapshot .bp {
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
}
.snapshot .bp img {
  width: 35vw;
  padding: 0 2vw;
}
.snapshot .sps {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2%;
}
.snapshot .sps li {
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 6vw;
  padding: 4% 4%;
  /* height: 6vw; */
}
.snapshot .text {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.snapshot .text .t {
  font-size: 3vw;
  font-weight: bold;
}
.snapshot .text .m {
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.7);
}
.snapshot .text .m li {
  width: 50%;
}
.snapshot .text .b {
  display: flex;
  justify-content: space-between;
}
.snapshot .text .b li {
  width: 24%;
  font-size: 3vw;
  text-align: center;
  padding: 1% 0;
  border: 1px solid #d8a857;
  color: #d8a857;
}
.snapshot .text .b li:hover {
  color: #fff;
  background-color: #d8a857;
}
.picdt .title {
  font-size: 4vw;
  font-weight: bold;
}
.picdt .cover {
  margin: 5% 0;
}
.picdt .b {
  color: rgba(0, 0, 0, 0.7)
}
</style>
