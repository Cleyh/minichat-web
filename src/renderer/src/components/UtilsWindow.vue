<script setup>
import { useRoute, useRouter } from 'vue-router'
import {useMessage, useDialog} from "naive-ui";

window.$router = useRouter();
window.$route = useRoute();
window.$message = useMessage();
// window.$dialog = useDialog();
</script>

<template>
<div id="utils-window">
  <slot>

  </slot>
</div>
</template>

<style scoped>
#utils-window {
  width: 100%;
  height: 100%;
}
</style>
