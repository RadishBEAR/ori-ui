<template>
  <div class="layout-head flex align-center">
    <div class="layout-head-logo flex direction-row align-center">
      <img class="layout-head-logo-image" src="../assets/logo.png"/>
      <span class="layout-head-logo-text">Ori-UI</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'LayoutHead' })
export default class OriTest extends Vue {
  public static entryName = 'LayoutHead';
}

</script>

<style scoped lang="less">
@import '../assets/less/theme.less';
@import '../assets/less/flex.less';
.layout-head {
  height: 80px;
  border-bottom: 1px solid @border-color1;
  .layout-head-logo{
    .layout-head-logo-image{
      width: 40px;
    }
    .layout-head-logo-text{
      margin-left: 5px;
      font-size: 20px;
      font-weight: 700;
      text-shadow: 0 0 1px currentColor;
      color: #0779E4;
    }
  }
}
</style>
