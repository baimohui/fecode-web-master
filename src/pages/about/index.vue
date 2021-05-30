<template>
  <div class="about">
    <icon-cover>
      <template v-slot:f>
        金色摇篮<br />涂料产业共创互联平台
      </template>
    </icon-cover>
    <about-pf/>
    <about-edge/>
    <about-plan/>
    <partner/>
    <foot/>
  </div>
</template>

<script>
import IconCover from "../../component/content/IconCover.vue";
import AboutPf from "../../component/about/AboutPf.vue";
import AboutEdge from "../../component/about/AboutEdge.vue";
import AboutPlan from "../../component/about/AboutPlan.vue";
import Partner from "../../component/content/Partner";
import Foot from "../../component/content/Foot";
export default {
  components: {
    IconCover,
    AboutPf,
    AboutEdge,
    AboutPlan,
    Partner,
    Foot
  },
};
</script>
