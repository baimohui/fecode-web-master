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
    <div class="copyright">
      copyright@2013-2016 MOLBASE ALL Rights Reserved吉力金色摇篮<br />
      粤公网安备 31010402005161 | 粤ICP备14014220 |
      增值电信业务经营许可证:沪B2-20140080
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.foot {
  position: relative;
  height: 1.6rem;
  background-color: #0b294d;
  font-size: 0.18rem;
  border: 1px solid blue;
}
.copyright {
  width: 200%;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  transform: scale(0.6);
  position: absolute;
  bottom: 0.18rem;
  left: -50%;
}
.category {
  position: relative;
  top: 20%;
  transform: scale(0.9);
  display: flex;
  font-size: 0.12rem;
  color: #fff;
  justify-content: space-around;
}
.category li {
  padding-right: 2%;
  position: relative;
  /* border: 1px solid red; */
  /* border: 1px solid red; */
}
.category li::after {
  content: "";
  width: 1px;
  height: 0.15rem;
  position: absolute;
  top: 40%;
  right: 0.01rem;
  background: rgba(255, 255, 255, 0.4);
}
.category li:last-child::after {
  background: transparent;
}
</style>