

<template>
    <v-card>
      <v-layout>
        <navVue />
<AppFooter/>
      </v-layout>
    </v-card>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const menu = ref(false); // Initialize the reactive menu state
  </script>