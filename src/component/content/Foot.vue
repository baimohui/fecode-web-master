<template>
  <div class="foot">
    <ul class="category">
      <li>
        <a href="#">关于我们</a>
      </li>
      <li>
        <a href="#">商务合作</a>
      </li>
      <li>
        <a href="#">联系我们</a>
      </li>
      <li>
        <a href="#">法律说明</a>
      </li>
      <li>
        <a href="#">营业执照</a>
      </li>
      <li>
        <a href="#">经营执照</a>
      </li>
    </ul>
    <div class="img">
      <img src="~assets/image/footer.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.category {
  position: relative;
  top: 30px;
  display: flex;
  font-size: 12px;
  color: #fff;
  justify-content: space-around;
}
</style>