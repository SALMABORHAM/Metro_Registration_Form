<template>
  <v-footer>
    <v-toolbar>
      <v-toolbar-title>
        <!-- <router-link to="/">Home</router-link> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
      </v-menu>
    </v-toolbar>
  </v-footer>
</template>
<script  lang="ts">
import { ref } from 'vue';

const menu = ref(false); // Initialize the reactive menu state
</script>
<style scoped>
  .v-input--is-rtl .v-label,
  .v-input--is-rtl input {
    text-align: right !important;
    direction: rtl !important;
  }
  </style>
