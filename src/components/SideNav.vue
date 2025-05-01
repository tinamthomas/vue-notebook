<template>
  <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : undefined">
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Status Tracker',
    value: 'status-tracker',
  },
  {
    title: 'Capture Photo',
    value: 'photo',
  },
  {
    title: 'Todo List',
    value: 'todo',
  },
  {
    title: 'Tic Tac Toc',
    value: 'tic-tac-toe',
  },
  {
    title: 'About',
    value: 'about',
  },
]
</script>
