<template>
  <div class="vue-com">
    <ReactCom />
  </div>
</template>

<script>
import { applyReactInVue } from 'vuereact-combined'
const ReactCom = applyReactInVue(require('../../react_app/aa.tsx'))
export default {
  name: 'tt',
  components: {
    ReactCom
  }
}
</script>

