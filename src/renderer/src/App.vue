<template>
  <!--  <login-page/>-->
  <n-message-provider>
    <UtilsWindow>
      <router-view/>
    </UtilsWindow>
  </n-message-provider>
</template>

<script setup>
import UtilsWindow from './components/UtilsWindow.vue'

</script>
