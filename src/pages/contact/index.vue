<template>
  <div class="contact">
    <icon-cover>
      <template v-slot:f>联系我们</template>
      <template v-slot:s
        >专业的服务团队，致力于为您提供专业的售前购买咨询服务，及完整的售后服务。</template
      >
    </icon-cover>
    <ce-title>
      <template v-slot:cn>业务洽谈/加入咨询/会晤预约</template>
      <template v-slot:en
        >CREATE THE INTRECONNECTION OF COATING INDUSTRY</template
      >
    </ce-title>
    <server-list />
    <industry-news />
    <partner />
    <foot />
  </div>
</template>

<script>
import IconCover from "../../component/content/IconCover";
import CeTitle from "../../component/content/CeTitle.vue";
import ServerList from "../../component/contact/ServerList";
import IndustryNews from "../../component/contact/IndustryNews";
import Partner from "../../component/content/Partner.vue";
import Foot from "../../component/content/Foot.vue";
export default {
  components: {
    IconCover,
    CeTitle,
    ServerList,
    ServerList,
    IndustryNews,
    Partner,
    Foot,
  },
};
</script>

<style scoped></style>
