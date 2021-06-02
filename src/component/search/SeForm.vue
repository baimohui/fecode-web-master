<template>
  <div class="seform">
    <div class="row">
      <form action="">
        <input class="text" type="text" placeholder="搜索" />
        <input class="submit" type="submit" value="" />
      </form>
      <div class="buy">快速求购</div>
    </div>
    <div class="caption">
      <p class="t1">当前搜索：“家庭涂料”</p>
      <p class="t2">共199个供应商，999个商品</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeForm",
};
</script>

<style scoped>
.seform {
  font-size: 2vw;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 4% 0;
}
form {
  flex: 1;
  display: flex;
  justify-content: space-between;
  height: 5vh;
  line-height: 5vh;
}
form input {
  border: 1px solid #e8d2a6;
  outline: none;
}
.text {
  flex: 1;
  padding-left: 3%;
}
.submit {
  background-image: url("~assets/image/search.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  background-color: #cca53f;
  width: 5vh;
  height: 5vh;
}
.buy {
  width: 20%;
  height: 5vh;
  line-height: 5vh;
  margin-left: 5%;
  text-align: center;
  color: #fff;
  background-color: #cca53f;
}
.caption {
  display: flex;
  justify-content: space-between;
}
</style>
