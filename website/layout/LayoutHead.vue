<template>
  <div class="layout-head"></div>
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
.layout-head {
  height: 80px;
  border-bottom: 1px solid @border-color1;
}
</style>
