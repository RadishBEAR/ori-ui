<template>
  <div class="layout flex direction-column justify-between">
    <LayoutHead class="layout-head"></LayoutHead>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LayoutHead from '@/layout/LayoutHead.vue';

@Component({
  name: 'Layout',
  components: {
    LayoutHead,
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
  .main {
    margin-top: 50px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
