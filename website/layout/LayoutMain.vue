<template>
  <div class="layout-main">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'LayouMain' })
export default class OriTest extends Vue {
  public static entryName = 'LayouMain';
}

</script>

<style scoped lang="less">
@import '../assets/less/theme.less';
@import '../assets/less/flex.less';
.layout-main {
  background-color: rgba(7, 121, 228,0.1);
  flex-grow: 1;
}
</style>
