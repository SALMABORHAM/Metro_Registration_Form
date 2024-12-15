<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
  //
</script>
<style scoped>
  .v-input--is-rtl .v-label,
  .v-input--is-rtl input {
    text-align: right !important;
    direction: rtl !important;
  }
  </style>