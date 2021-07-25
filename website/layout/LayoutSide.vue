<template>
  <div class="layout-side">
    <a class="layout-side-title">搭建记录</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'LayoutSide' })
export default class OriTest extends Vue {
  public static entryName = 'LayoutSide';
}

</script>

<style scoped lang="less">
@import '../assets/less/theme.less';
@import '../assets/less/flex.less';
.layout-side {
  width: 240px;
  padding: 50px 0;
  text-align: start;
  cursor: pointer;
  .layout-side-title{
    font-size: 16px;
    font-weight: 900;
  }
}
</style>
