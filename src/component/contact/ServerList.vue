<template>
  <div class="slwrapper">
    <p class="line">客服人员</p>
    <div class="serverlist">
      <div class="bbg"></div>
      <div class="list">
        <ul class="server">
          <li class="avator">
            <img src="~assets/image/contact/mayun.jpg" alt="" />
          </li>
          <li class="platform">涂料成品交易平台</li>
          <li class="desc">
            天下金涂专员：黄彩燕<br />
            电话：13025788580
          </li>
        </ul>
        <ul class="server">
          <li class="avator">
            <img src="~assets/image/contact/mayun.jpg" alt="" />
          </li>
          <li class="platform">涂料成品交易平台</li>
          <li class="desc">
            天下金涂专员：黄彩燕<br />
            电话：13025788580
          </li>
        </ul>
        <ul class="server">
          <li class="avator">
            <img src="~assets/image/contact/mayun.jpg" alt="" />
          </li>
          <li class="platform">涂料成品交易平台</li>
          <li class="desc">
            天下金涂专员：黄彩燕<br />
            电话：13025788580
          </li>
        </ul>
        <ul class="server">
          <li class="avator">
            <img src="~assets/image/contact/mayun.jpg" alt="" />
          </li>
          <li class="platform">涂料成品交易平台</li>
          <li class="desc">
            天下金涂专员：黄彩燕<br />
            电话：13025788580
          </li>
        </ul>
      </div>
    </div>
    <p class="line">联系方式</p>
    <p class="tele">公司总机：(86)756 76888 91/92/93(fax)</p>
  </div>
</template>

<script>
export default {
  name: "ServerList",
};
</script>

<style scoped>
p {
  font-size: 3vw;
}
.serverlist {
  position: relative;
  margin-top: 6vh;
  margin-bottom: 5%;
}
.serverlist .list {
  position: absolute;
  top: -4vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* background-color: #414f76; */
}
.serverlist .bbg {
  height: 36vh;
  background-color: #414f76;
}
.server {
  width: 35%;
  font-size: 14px;
  color: #fff;
}
.server .platform {
  padding-left: 3%;
  padding-top: 5%;
}
.server .desc {
  padding: 3% 0 20% 3%;
  font-size: 2vw;
  line-height: 120%;
}
.avator {
  text-align: center;
}
.avator img {
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 0%;
}
.line {
  border-left: 2px solid #CBAF65;
  padding-left: 1%;
  line-height: 0.8;
}
.tele {
  font-size: 2vw;
  color: #7B7B7B;
  margin-top: 3%;
  margin-left: 2%;
}
</style>