<template>
  <div class="w-textarea" ref="wTextarea">
    <Input v-model="val" type="textarea" :rows="4" placeholder="Enter something..." />
  </div>
</template>

<script>
import { Input } from 'iview'
export default {
  name: 'jgTextarea',
  components: { Input },
  data() {
    return {
      val: ''
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
</style>
