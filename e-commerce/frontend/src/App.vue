<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>

  <div id="nav">
    <!-- Burger icon on small screens -->
    <div class="burger" @click="isMenuOpen = !isMenuOpen">
      ☰
    </div>

    <!-- Links wrapper -->
    <div class="nav-links" :class="{ open: isMenuOpen }">
      <router-link to="/" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/my-images" @click="isMenuOpen = false">My Images</router-link>
      <router-link to="/login" @click="isMenuOpen = false">Login</router-link>
    </div>
  </div>
  <!-- Body of the conten -->
  <div class="container">
    <router-view></router-view>
  </div>
</template>
