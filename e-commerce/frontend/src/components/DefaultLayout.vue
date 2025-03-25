<script setup></script>
<template>
  <header>
    <slot name="header"></slot>
  </header>
  <!-- Router-view: Rendering route-matched views -->
  <main>
    <router-view></router-view>
  </main>
</template>
<style scoped></style>