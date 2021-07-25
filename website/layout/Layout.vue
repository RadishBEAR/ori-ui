<template>
  <div class="layout flex direction-column">
    <LayoutHead class="layout-head"></LayoutHead>
    <div class="layout-container flex">
      <LayoutSide></LayoutSide>
      <LayoutMain></LayoutMain>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutHead from '@/layout/LayoutHead.vue';
import LayoutSide from '@/layout/LayoutSide.vue';
import LayoutMain from '@/layout/LayoutMain.vue';

@Component({
  name: 'Layout',
  components: {
    LayoutHead,
    LayoutSide,
    LayoutMain,
  },
})
export default class OriTest extends Vue {
  public static entryName = 'Layout';
}

</script>

<style scoped lang="less">
@import '../assets/less/flex.less';
.layout {
  width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
  .layout-head{
    width: 100%;
  }
  .layout-container{
    flex-grow: 1;
  }
}
</style>
