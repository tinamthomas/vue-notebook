<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>
      <SideNav />
      <v-main style="height: 500px">
        <div style="margin: 15px">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import SideNav from './components/SideNav.vue'
</script>
