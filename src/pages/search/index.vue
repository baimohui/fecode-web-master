<template>
  <div>
    <se-head />
    <div class="fwncontent">
      <se-form />
      <se-expo v-if="flag" />
      <se-detail v-else />
      <se-commend />
    </div>
    <partner />
    <foot />
  </div>
</template>

<script>
import SeHead from "../../component/search/SeHead";
import SeForm from "../../component/search/SeForm";
import SeExpo from "../../component/search/SeExpo";
import SeDetail from "../../component/search/SeDetail";
import SeCommend from "../../component/search/SeCommend";
import Partner from "../../component/content/Partner";
import Foot from "../../component/content/Foot";

import eventBus from "../../../eventBus";
export default {
  components: {
    SeHead,
    SeForm,
    SeExpo,
    SeDetail,
    SeCommend,
    Partner,
    Foot,
  },
  data() {
    return {
      flag: true,
    };
  },
  mounted() {
    eventBus.$on("detailClicked", (info) => {
      this.flag = false;
      console.log("detailClicked");
    });
  },
  beforeDestroy() {
    eventBus.$off("detailClicked");
    console.log("destroyed");
  },
};
</script>

<style>
.fwncontent {
  font-size: 12px;
  margin: 0 4%;
}
</style>
