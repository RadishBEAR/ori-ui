<template>
  <div class="OriTest">
    测试
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'OriTest' })
export default class OriTest extends Vue {
  private name = '组件测试';

  public static entryName = 'OriTest';
}

</script>

<style>
.OriTest{
  color: brown;
  font-size: 36px;
  font-weight: 900;
}
</style>
