<template>
    <v-app-bar color="#E1F5FE">
      <v-toolbar-title class="font-weight-black text-left">
        <router-link to="/Profile" tag="span" style="cursor: pointer">
          <v-avatar size="80" class="mr-2">
            <v-img src="../assets/logo.png" alt="Logo" />
          </v-avatar>
        </router-link>
        <!-- RDMC | <span class="font-weight-light">Portal</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-title class="text-h6">Hello, Ahmed</v-title> -->
  
          <v-btn icon>
            <v-icon size="35">mdi-account-outline</v-icon>
          </v-btn>
          <!-- <template v-slot:activator="{ props }">
                <v-btn block v-bind="props">
                  <v-icon size="35">mdi-account-outline</v-icon>
                </v-btn>
              </template> -->
          <!-- <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
              </template> -->
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-app-bar-nav-icon color="grey-darken-4"></v-app-bar-nav-icon>
                <!-- <v-icon size="20">mdi-dots-vertical</v-icon> -->
              </v-btn>
            </template>
  
            <v-list>
              <v-list-item link to="/Profile">
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/CompanyUpdates">
                <v-list-item-title>Company Updates</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/">
                <v-list-item-title>Log Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- </v-btn> -->
        </template>
      </v-menu>
    </v-app-bar>
  
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list :items="items"></v-list>
  
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="$router.push(item.value)"
          :prepend-icon="item.icon"
        >
          <v-list-title>{{ item.title }}</v-list-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from "vue";
  
  const drawer = ref(false);
  const items = ref([]);
  
  onMounted(() => {
    items.value = [
      {
        title: "Notificato",
        icon: "mdi-home",
        value: "/Notification",
      },
      {
        title: "About",
        icon: "mdi-information",
        value: "/about",
      },
    ];
  });
  </script>
  